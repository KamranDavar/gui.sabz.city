/* For license and copyright information please see LEGAL file in repository */

import '../widgets/widget-menu-hamburger.js'
import '../widgets/widget-menu-service.js'
import '../widgets/widget-menu-user.js'

Application.Pages["dev"] = {
    ID: "dev",
    RecordID: "",
    Condition: {},
    State: "",
    Robots: "all",
    Info: {
        "en": { Name: "Developers Cloud Services", ShortName: "Developers", Tagline: "", Slogan: "", Description: "", Tags: [] },
        "fa": { Name: "خدمات ابری توسعه دهندگان", ShortName: "توسعه دهندگان", Tagline: "", Slogan: "", Description: "", Tags: [] }
    },
    Icon: "code", Related: ["domains",],
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
        "repo": "",
        "user-repo": "",
    }
}

Application.Pages["dev"].ConnectedCallback = function () {
    window.document.body.innerHTML = eval('`' + Application.ActivePage.HTML + '`')

    Application.Pages["dev"].addUserRepositories()
}

Application.Pages["dev"].DisconnectedCallback = function () {
}

Application.Pages["dev"].addUserRepositories = function (query) {
    // get repositories ID by query string
    let userRepoIDs = ["1", "2"]
    if (userRepoIDs.length !== 0) {
        const userRepositories = window.document.getElementById("userRepositories")
        userRepositories.innerHTML = ""
        for (let id of userRepoIDs) {
            let userRepo = Application.Pages["dev"].TestData.repo[id]
            userRepositories.insertAdjacentHTML('beforeend', eval('`' + Application.Pages["dev"].Templates["user-repo"] + '`'))
        }
    } else {
        window.document.getElementById("noRepositories").hidden = false
    }

}

Application.Pages["dev"].getUserTimeLine = function () {
    // Issue & repo card get by user interest or contribute or friends and followers
    // card base on e.g. user interest, search, ...
}

Application.Pages["dev"].TestData = {
    repo: {
        "1": {
            RepositoryID: "1",
            Name: "gui.sabz.city",
            TAGS: ["", ""],
            Stage: {
                Dependencies: ["2"],
                Objects: ["1", "2"]
            }
        },
        "2": {
            RepositoryID: "2",
            Name: "gui-engine-js",
            TAGS: ["", ""],
            Stage: {
                Dependencies: [],
                Objects: ["2", "1"]
            }
        }
    },
    stage: {

    },
    object: {
        "1": {
            UUID: "1",
            Name: "main.html",
            State: "N"
        },
        "2": {
            UUID: "2",
            Name: "main.js",
            State: "N"
        }
    }
}