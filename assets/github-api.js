var GitHubAPI = {
    token: null,
    owner: null,
    repo: null,
    branch: 'main',

    init: function(token, owner, repo, branch) {
        this.token = token;
        this.owner = owner;
        this.repo = repo;
        this.branch = branch || 'main';
    },

    saveConfig: function() {
        localStorage.setItem('github_config', JSON.stringify({
            token: this.token,
            owner: this.owner,
            repo: this.repo,
            branch: this.branch
        }));
    },

    loadConfig: function() {
        var config = localStorage.getItem('github_config');
        if (config) {
            var parsed = JSON.parse(config);
            this.token = parsed.token;
            this.owner = parsed.owner;
            this.repo = parsed.repo;
            this.branch = parsed.branch || 'main';
            return true;
        }
        return false;
    },

    clearConfig: function() {
        localStorage.removeItem('github_config');
        this.token = null;
        this.owner = null;
        this.repo = null;
    },

    isConfigured: function() {
        return this.token && this.owner && this.repo;
    },

    request: function(method, path, data) {
        var self = this;
        return new Promise(function(resolve, reject) {
            var xhr = new XMLHttpRequest();
            var url = 'https://api.github.com' + path;
            xhr.open(method, url, true);
            xhr.setRequestHeader('Authorization', 'token ' + self.token);
            xhr.setRequestHeader('Accept', 'application/vnd.github.v3+json');
            xhr.onreadystatechange = function() {
                if (xhr.readyState === 4) {
                    if (xhr.status >= 200 && xhr.status < 300) {
                        try {
                            resolve(JSON.parse(xhr.responseText));
                        } catch (e) {
                            resolve(xhr.responseText);
                        }
                    } else {
                        try {
                            var error = JSON.parse(xhr.responseText);
                            reject(new Error(error.message || 'GitHub API Error'));
                        } catch (e) {
                            reject(new Error('GitHub API Error: ' + xhr.status));
                        }
                    }
                }
            };
            xhr.onerror = function() {
                reject(new Error('Network Error'));
            };
            if (data) {
                xhr.send(JSON.stringify(data));
            } else {
                xhr.send();
            }
        });
    },

    getFile: function(path) {
        var self = this;
        return this.request('GET', '/repos/' + this.owner + '/' + this.repo + '/contents/' + path + '?ref=' + this.branch)
            .then(function(response) {
                return {
                    content: decodeBase64(response.content),
                    sha: response.sha,
                    path: path
                };
            });
    },

    createOrUpdateFile: function(path, content, message, sha) {
        var data = {
            message: message || 'Update ' + path,
            content: encodeBase64(content),
            branch: this.branch
        };
        if (sha) {
            data.sha = sha;
        }
        return this.request('PUT', '/repos/' + this.owner + '/' + this.repo + '/contents/' + path, data);
    },

    deleteFile: function(path, message, sha) {
        var data = {
            message: message || 'Delete ' + path,
            sha: sha,
            branch: this.branch
        };
        return this.request('DELETE', '/repos/' + this.owner + '/' + this.repo + '/contents/' + path, data);
    },

    uploadImage: function(filename, base64Content, folder) {
        var path = folder ? folder + '/' + filename : filename;
        var data = {
            message: 'Upload image: ' + filename,
            content: base64Content,
            branch: this.branch
        };
        return this.request('PUT', '/repos/' + this.owner + '/' + this.repo + '/contents/' + path, data);
    },

    listFiles: function(folder) {
        return this.request('GET', '/repos/' + this.owner + '/' + this.repo + '/contents/' + folder + '?ref=' + this.branch);
    },

    getRepoInfo: function() {
        return this.request('GET', '/repos/' + this.owner + '/' + this.repo);
    },

    getImageUrl: function(path) {
        return 'https://raw.githubusercontent.com/' + this.owner + '/' + this.repo + '/' + this.branch + '/' + path;
    }
};

function encodeBase64(str) {
    try {
        var bytes = new TextEncoder().encode(str);
        var binString = Array.from(bytes, function(byte) {
            return String.fromCodePoint(byte);
        }).join('');
        return btoa(binString);
    } catch (e) {
        return btoa(unescape(encodeURIComponent(str)));
    }
}

function decodeBase64(base64) {
    try {
        var binary = atob(base64);
        var bytes = new Uint8Array(binary.length);
        for (var i = 0; i < binary.length; i++) {
            bytes[i] = binary.charCodeAt(i);
        }
        return new TextDecoder().decode(bytes);
    } catch (e) {
        return decodeURIComponent(escape(atob(base64)));
    }
}

function fileToBase64(file) {
    return new Promise(function(resolve, reject) {
        var reader = new FileReader();
        reader.onload = function() {
            var base64 = reader.result.split(',')[1];
            resolve(base64);
        };
        reader.onerror = reject;
        reader.readAsDataURL(file);
    });
}
