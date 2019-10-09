# Contributing to OUI

OUI is an open source repo where anyone can contribute, and only Optimizely employees have permission to create an npm release.

## :pushpin: Install & Run

Requires [Node](https://nodejs.org/en/download/) and [Yarn](https://yarnpkg.com/lang/en/docs/install/#mac-stable)

1. `git clone git@github.com:optimizely/oui.git && cd oui`
2. `yarn install`

Then you can run and develop locally:

* `yarn storybook` - launch React Storybook locally and watch assets
* `yarn build-storybook` - build static Storybook for documentation
* `yarn test` - test code for syntax errors

### :bulb: Adopt Storybook Driven Development
Storybook is the best way to learn about, play with, prototype, and build OUI components. Storybook runs locally and will watch for component and documentation updates. Visit http://storybooks-official.netlify.com/ for inspiration on all that is possible!

Every component should contain prop definitions and a robust set of Storybook examples (stories). This will allow for quicker adoption and help Storybook to serve as the best hub for OUI technical documentation. **If you create or update a component, it shouldn't be considered finished until you've completed the following:**

1. Run Storybook and watch assets via `yarn storybook`
2. Copy or reference the Story format of this [ExampleComponent](./data/components/ExampleComponent)
3. Include accurate `propType` configurations and comments, as well as `defaultProps` if applicable (these details are pulled into the _show info_ section)
4. Create a README.md for you component with usage and implementation information
>Note: until Storybook Issues [#3458](https://github.com/storybooks/storybook/issues/3458) and [#4499](https://github.com/storybooks/storybook/issues/4499) are resolved, each component README should be added in your **_*.story.js** file. Additionally using double-spaces at the end of each line and a period + double-space for line breaks will help make the files more readable.

## :pencil: Develop

1. Create branch: `git checkout -b username/branch-name`
2. Make and commit your changes
3. Update `CHANGELOG.md` and note your changes directly under "Unreleased":

    ```md
    ## Unreleased
    ### Added/Changed/Deprecated/Removed/Fixed/Security
    - [Release/Feature/Patch] Describe your change here. ([#GITHUB_ISSUE](Link to github issue))
    ```

    > **Note:** please do not create a new version number header, this is done only during release.

4. Verify your OUI changes work as expected in the Optimizely repo.

    Use yarn link:

    ```sh
    cd ~/projects/optimizely-oui    # go into package directory
    yarn build                      # build your oui folder so that your latest changes are included in the linked module
    yarn link                       # creates global link
    cd ~/projects/optly             # go into some other package directory
    yarn link optimizely-oui        # installs your local package instead of a versioned module pulled from npm
    ```
    Each time you make code changes you will need to manually run `yarn build` again to ensure your linked module is updated with your latest OUI code changes.

5. `git push` your changes to GitHub
6. [Open a pull request](https://github.com/optimizely/oui/compare) of your branch, add at least one reviewer
    > **Making a breaking change?** Please [update the Optimizely app](https://github.com/optimizely/oui/issues/360) and bump the `package.json` OUI version to prevent unreleased changes from blocking future releases.

## :ship: Release a New Version

Both UI Engineers and the Frontend team have permission to release OUI via `yarn version --xxxxx`:

1. Get latest code: `git checkout devel && git pull && git checkout master && git pull`
2. Merge your changes: `git merge devel`
3. Build static Storybook documentation for this release: `yarn build-storybook`
4. Add a new header to `CHANGELOG.md` under “Unreleased” with the [new version number](https://medium.com/design-optimizely/how-to-version-your-ui-library-1c7a1b7ee23a):

    ```md
    ## Unreleased

    ## 31.0.0 - 2018-04-13
    - [Release] Added a cool breaking change. (#999)
    ```
5. Commit to master: `git add . && git commit -a -m 'Prep for new release version x.y.z'`
    * You'll be commiting the CHANGELOG file and the new Storybook iframe.html and bundle
6. Run one of these depending on the highest importance issue this release:
    * `[Patch]` changes: `yarn version --patch`
    * `[Feature]` changes: `yarn version --minor`
    * `[Release]` changes: `yarn version --major`
7. [Create a new release on GitHub](https://github.com/optimizely/oui/releases/new):
    * Select the new tag version
    * Leave “Release title” blank
    * Paste in new release contributions from the `CHANGELOG.md` release notes section from step 3 above into the Description field
    * Click Publish Release
8. Bump the OUI version number in Optimizely's [`package.json`](https://github.com/optimizely/optimizely/blob/devel/src/www/frontend/package.json) and [test to ensure compatibility](https://docs.google.com/document/d/1TTfdhCSH7mPBeUzVme99qHR-QsFg7PTKP2lGqB9Dk3Y/edit#heading=h.ktasdjfn5j1h).
    * Within the Optimizely repo run `yarn upgrade optimizely-oui@99.xx.xx` (note to include the major version number e.g. `99.`, leaving the minor and patch numbers as `xx.xx`) which updates `yarn.lock` and `package.json`
        * If you notice that your yarn commands are removing the integrity shas inside the yarn.lock file, your yarn version needs an upgrade
    * Make a PR that links to the OUI release and includes descriptions of the issues fixed and the JIRA ticket numbers for the fixes in this release
9. You're done :sunglasses:
