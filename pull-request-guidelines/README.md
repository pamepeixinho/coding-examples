# Pull Requests

> Pull Requests are typically used by teams for shared collaboration and feature work or bug fixes.
The idea is to make sure well written and bug-free code gets pushed to the repository.
It is a way to develop high-quality code.

## Creating a Pull Request (PR)

Once a PR is submitted, interested co-workers will perform a code review and provide feedbacks and require changes.
So, it's important that your PR follow some principles to help the reviewer:

### Good branch name

First all, your branch name should be meaningful!! 
Remembers that this is the first description of your code change:

There're two patterns to the branch name:

- camelCase: `addPrGuidelines`
- kebab: `add-create-pr`

And a good practice in some repository is to follow the features/bugfixes branches: `feature/add-create-pr`.

### Create small PRs

Before you start working on a story/feature, make a mental/written note on how you want to break
it down into several smaller PR’s. `#feature-breakdown`.

### Add good description

It is essential to have a good description of your PR, but.. what is a good description?

We usually consider a good description when it has:

- Task number
- Explain the context of that feature/fix
- Why and how it's made
- Examples to show that it's really working
  - when it's front-end task we usually add a gif of page working and/or prints in all resolutions
- Prints of coverage

### Add labels

In all project, we have different labels, like "WIP", "review", "bug", etc.
Consider always adding the right label to make your coworkers' life easier.
They know what, how, who it's doing and when it's necessary to review.

### References:

- <https://blog.github.com/2015-01-21-how-to-write-the-perfect-pull-request/>
- <https://help.github.com/articles/creating-a-pull-request/>
- <https://github.com/RIOT-OS/RIOT/wiki/Guidelines-for-Creating-a-Good-Pull-Request>
- <https://tighten.co/blog/building-a-great-pull-request>

## Reviewing a PR

### "Checklist" to review a PR

- see if there're unit tests/integration tests to new code blocks
- see if the variables have meaningful and intuitive names
- see if there's some DRY to be done
- ask what it is doing if you don't understand.

### Be a Reviewer

- Even you are new at the project, review the PR to learn more

- Don't let your coworkers waiting too much

  > Be fast, work as a team

  <img width="200" src="https://cdn-images-1.medium.com/max/1600/1*hI2unkW3EkK9wdwaaOpBOA.jpeg" />

<!-- http://a.memegen.com/Wvm3H2.gif -->

**References:**

- <https://medium.com/palantir/code-review-best-practices-19e02780015f>
- <https://medium.com/@pvpach/code-reviews-ethics-ce66784d5da1>
- <https://blog.scottnonnenberg.com/top-ten-pull-request-review-mistakes/>
- <https://medium.com/@coorasse/dont-miss-a-single-pull-request-db2d8140d543>

### New tips to review a front-end PR

**References**

- <https://goo.gl/VWFEMQ>

### New tips to review a back-end PR

> // TODO: WIP

**References**

## References about PR (both topics):

- <https://hackernoon.com/the-art-of-humanizing-pull-requests-prs-b520588eb345>
- <https://hackernoon.com/the-art-of-pull-requests-6f0f099850f9>
- <https://hipsters.tech/pull-requests-e-code-review-hipsters-64/>
