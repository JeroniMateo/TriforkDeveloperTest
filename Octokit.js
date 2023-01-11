


const octokit = new Octokit({ 
    auth: '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',
});
await octokit.request("GET /octocat", {});