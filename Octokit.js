import { Octokit, App } from 'octokit'

const octokit = new Octokit({
  auth: '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'
})

await octokit.request('GET /octocat', {})

await octokit.rest.issues.create({
  owner: 'octocat',
  repo: 'hello-world',
  title: 'Hello, world!',
  body: 'I created this issue using Octokit!'
})

await octokit.request('POST /repos/{owner}/{repo}/issues', {
  owner: 'octocat',
  repo: 'hello-world',
  title: 'Hello, world!',
  body: 'I created this issue using Octokit!'
})
