import Http from './http'

const listRepos = (orgName) => {
    const org = orgName || 'B2W-BIT'
    return Http.get(`/orgs/${org}/repos`)
}

const listCommits = (repoName, params) => {
    params = params || 'page=1'
    return Http.get(`/repos/${repoName}/commits?${params}`)
}

export {
    listRepos,
    listCommits
}