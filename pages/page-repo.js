/* For license and copyright information please see LEGAL file in repository */

import '../widgets/widget-menu-hamburger.js'
import '../widgets/widget-menu-service.js'
import '../widgets/widget-menu-user.js'

Application.Pages["repo"] = {
    ID: "repo",
    RecordID: "",
    Condition: {},
    State: "",
    Robots: "all",
    Info: {
        "en": { Name: "Repository", ShortName: "Repository", Tagline: "", Slogan: "", Description: "", Tags: [] },
        "fa": { Name: "مخزن داده", ShortName: "مخزن داده", Tagline: "", Slogan: "", Description: "", Tags: [] }
    },
    Icon: "storage", Related: [],
    Text: {
        "en": [
            "",
        ],
        "fa": [
            "",
        ],
    },
    HTML: "",
    CSS: "",
    Templates: {
        "editor-button": "",
        "file-button": "",
        "repo-dep": "",
    }
}

Application.Pages["repo"].ConnectedCallback = function () {
    // Get repository data
    const repo = Application.Pages["dev"].TestData.repo[Application.Pages["repo"].RecordID]

    if (repo) {
        window.document.body.innerHTML = eval('`' + Application.ActivePage.HTML + '`')

        // add repo files buttons
        const repoDetails = window.document.getElementById("repoDetails")
        Application.Pages["repo"].addFileButton(repo, repoDetails)

        // add repo dependencies
        const repoDependencies = window.document.getElementById("repoDependencies")
        for (let d of repo.Stage.Dependencies) {
            // get object data
            let repoDep = Application.Pages["dev"].TestData.repo[d]
            repoDependencies.insertAdjacentHTML('beforeend', eval('`' + Application.Pages["repo"].Templates["repo-dep"] + '`'))

            const repoDependency = window.document.getElementById("dep-" + d)
            Application.Pages["repo"].addFileButton(repoDep, repoDependency)

            // TODO : check dependency update available and show related button!
            // const newVersionAvailable = window.document.getElementById('newVersionAvailable-' + repoDep.RepositoryID)
            // newVersionAvailable.hidden = false
        }
    } else {
        Application.Router("error-404", "")
    }
}

Application.Pages["repo"].DisconnectedCallback = function () {
}

Application.Pages["repo"].addFileButton = function (repo, element) {
    for (let o of repo.Stage.Objects) {
        // get object data
        let object = Application.Pages["dev"].TestData.object[o]
        element.insertAdjacentHTML('beforeend', eval('`' + Application.Pages["repo"].Templates["file-button"] + '`'))
    }
}

Application.Pages["repo"].openFile = function (id) {

}

Application.Pages["repo"].openRepoStages = function (id) {

}

Application.Pages["repo"].openRepoComments = function (id) {

}

Application.Pages["repo"].openRepoSettings = function (id) {

}

Application.Pages["repo"].addNewFile = function (id) {

}
