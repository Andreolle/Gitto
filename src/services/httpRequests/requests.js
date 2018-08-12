import Http from './http'

const listRepos = (orgName) => {
    const org = orgName || 'B2W-BIT'
    return Http.get(`/orgs/${org}/repos`)
}

const listCommits = (repoName) => {
    return Http.get(`/repos/${repoName}/commits`)
}

export {
    listRepos,
    listCommits
}