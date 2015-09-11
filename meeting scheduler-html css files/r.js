


<!DOCTYPE html>
<html lang="en" class=" is-copy-enabled">
  <head prefix="og: http://ogp.me/ns# fb: http://ogp.me/ns/fb# object: http://ogp.me/ns/object# article: http://ogp.me/ns/article# profile: http://ogp.me/ns/profile#">
    <meta charset='utf-8'>
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta http-equiv="Content-Language" content="en">
    <meta name="viewport" content="width=1020">
    
    
    <title>jrburke/r.js</title>
    <link rel="search" type="application/opensearchdescription+xml" href="/opensearch.xml" title="GitHub">
    <link rel="fluid-icon" href="https://github.com/fluidicon.png" title="GitHub">
    <link rel="apple-touch-icon" sizes="57x57" href="/apple-touch-icon-114.png">
    <link rel="apple-touch-icon" sizes="114x114" href="/apple-touch-icon-114.png">
    <link rel="apple-touch-icon" sizes="72x72" href="/apple-touch-icon-144.png">
    <link rel="apple-touch-icon" sizes="144x144" href="/apple-touch-icon-144.png">
    <meta property="fb:app_id" content="1401488693436528">

      <meta content="@github" name="twitter:site" /><meta content="summary" name="twitter:card" /><meta content="jrburke/r.js" name="twitter:title" /><meta content="r.js - Runs RequireJS in Node and Rhino, and used to run the RequireJS optimizer" name="twitter:description" /><meta content="https://avatars3.githubusercontent.com/u/73359?v=3&amp;s=400" name="twitter:image:src" />
      <meta content="GitHub" property="og:site_name" /><meta content="object" property="og:type" /><meta content="https://avatars3.githubusercontent.com/u/73359?v=3&amp;s=400" property="og:image" /><meta content="jrburke/r.js" property="og:title" /><meta content="https://github.com/jrburke/r.js" property="og:url" /><meta content="r.js - Runs RequireJS in Node and Rhino, and used to run the RequireJS optimizer" property="og:description" />
      <meta name="browser-stats-url" content="https://api.github.com/_private/browser/stats">
    <meta name="browser-errors-url" content="https://api.github.com/_private/browser/errors">
    <link rel="assets" href="https://assets-cdn.github.com/">
    <link rel="web-socket" href="wss://live.github.com/_sockets/MTI3NTQxNjk6NGIzOTliNWY4Yzk0NjMwNjY5OTIyYjhkMzVkMTk5YjI6YTA0OTc0YzBkMTRiN2JmMzUxZTQxOWMyNmRlYjUxMTlhNGMzYTBhMWM3OWU5MjEyMjYwOWJjMDk4NTc3YjlmOQ==--ddb0b5c2e5b3338b9aa3740df328f0aee7ce9125">
    <meta name="pjax-timeout" content="1000">
    <link rel="sudo-modal" href="/sessions/sudo_modal">

    <meta name="msapplication-TileImage" content="/windows-tile.png">
    <meta name="msapplication-TileColor" content="#ffffff">
    <meta name="selected-link" value="repo_source" data-pjax-transient>

        <meta name="google-analytics" content="UA-3769691-2">

    <meta content="collector.githubapp.com" name="octolytics-host" /><meta content="collector-cdn.github.com" name="octolytics-script-host" /><meta content="github" name="octolytics-app-id" /><meta content="4B9B4C02:61C1:38DB38B:55A22801" name="octolytics-dimension-request_id" /><meta content="12754169" name="octolytics-actor-id" /><meta content="shahrzadmn" name="octolytics-actor-login" /><meta content="5677ebabd99a4d80ba16e2ae07ae64b24c33efda8daa6a3cf4fc91aba71cc31a" name="octolytics-actor-hash" />
    
    <meta content="Rails, view, files#disambiguate" data-pjax-transient="true" name="analytics-event" />
    <meta class="js-ga-set" name="dimension1" content="Logged In">
    <meta name="is-dotcom" content="true">
      <meta name="hostname" content="github.com">
    <meta name="user-login" content="shahrzadmn">

      <link rel="icon" sizes="any" mask href="https://assets-cdn.github.com/pinned-octocat.svg">
      <meta name="theme-color" content="#4078c0">
      <link rel="icon" type="image/x-icon" href="https://assets-cdn.github.com/favicon.ico">


    <meta content="authenticity_token" name="csrf-param" />
<meta content="94EDCfd2tCh4CejZxqhCi7o+R09nYRmrkZhzs50JzdKQGqMiMynJzdCM3DIwsxZWBjW4z7Mur5Et/L40ClaR3g==" name="csrf-token" />

    <link crossorigin="anonymous" href="https://assets-cdn.github.com/assets/github/index-8824a5ef57ac4ae0b5ca429778b9660b1c66d09deea2ff11681de18d86a4bbb1.css" media="all" rel="stylesheet" />
    <link crossorigin="anonymous" href="https://assets-cdn.github.com/assets/github2/index-f0d033a37796c27f6b5b24aa8dc21af9c206a51ed2fe782d660dc20267c17d2b.css" media="all" rel="stylesheet" />
    
    


    <meta http-equiv="x-pjax-version" content="3f58d2288e653bc3998db56bf3ad89c7">

      
  <meta name="description" content="r.js - Runs RequireJS in Node and Rhino, and used to run the RequireJS optimizer">
  <meta name="go-import" content="github.com/jrburke/r.js git https://github.com/jrburke/r.js.git">

  <meta content="73359" name="octolytics-dimension-user_id" /><meta content="jrburke" name="octolytics-dimension-user_login" /><meta content="1735985" name="octolytics-dimension-repository_id" /><meta content="jrburke/r.js" name="octolytics-dimension-repository_nwo" /><meta content="true" name="octolytics-dimension-repository_public" /><meta content="false" name="octolytics-dimension-repository_is_fork" /><meta content="1735985" name="octolytics-dimension-repository_network_root_id" /><meta content="jrburke/r.js" name="octolytics-dimension-repository_network_root_nwo" />
  <link href="https://github.com/jrburke/r.js/commits/master.atom" rel="alternate" title="Recent Commits to r.js:master" type="application/atom+xml">

  </head>


  <body class="logged_in  env-production windows vis-public">
    <a href="#start-of-content" tabindex="1" class="accessibility-aid js-skip-to-content">Skip to content</a>
    <div class="wrapper">
      
      
      



        <div class="header header-logged-in true" role="banner">
  <div class="container clearfix">

    <a class="header-logo-invertocat" href="https://github.com/" data-hotkey="g d" aria-label="Homepage" data-ga-click="Header, go to dashboard, icon:logo">
  <span class="mega-octicon octicon-mark-github"></span>
</a>


      <div class="site-search repo-scope js-site-search" role="search">
          <form accept-charset="UTF-8" action="/jrburke/r.js/search" class="js-site-search-form" data-global-search-url="/search" data-repo-search-url="/jrburke/r.js/search" method="get"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /></div>
  <label class="js-chromeless-input-container form-control">
    <div class="scope-badge">This repository</div>
    <input type="text"
      class="js-site-search-focus js-site-search-field is-clearable chromeless-input"
      data-hotkey="s"
      name="q"
      placeholder="Search"
      data-global-scope-placeholder="Search GitHub"
      data-repo-scope-placeholder="Search"
      tabindex="1"
      autocapitalize="off">
  </label>
</form>
      </div>

      <ul class="header-nav left" role="navigation">
        <li class="header-nav-item">
          <a href="/pulls" class="js-selected-navigation-item header-nav-link" data-ga-click="Header, click, Nav menu - item:pulls context:user" data-hotkey="g p" data-selected-links="/pulls /pulls/assigned /pulls/mentioned /pulls">
            Pull requests
</a>        </li>
        <li class="header-nav-item">
          <a href="/issues" class="js-selected-navigation-item header-nav-link" data-ga-click="Header, click, Nav menu - item:issues context:user" data-hotkey="g i" data-selected-links="/issues /issues/assigned /issues/mentioned /issues">
            Issues
</a>        </li>
          <li class="header-nav-item">
            <a class="header-nav-link" href="https://gist.github.com" data-ga-click="Header, go to gist, text:gist">Gist</a>
          </li>
      </ul>

    
<ul class="header-nav user-nav right" id="user-links">
  <li class="header-nav-item">
      <span class="js-socket-channel js-updatable-content"
        data-channel="notification-changed:shahrzadmn"
        data-url="/notifications/header">
      <a href="/notifications" aria-label="You have no unread notifications" class="header-nav-link notification-indicator tooltipped tooltipped-s" data-ga-click="Header, go to notifications, icon:read" data-hotkey="g n">
          <span class="mail-status all-read"></span>
          <span class="octicon octicon-inbox"></span>
</a>  </span>

  </li>

  <li class="header-nav-item dropdown js-menu-container">
    <a class="header-nav-link tooltipped tooltipped-s js-menu-target" href="/new"
       aria-label="Create new..."
       data-ga-click="Header, create new, icon:add">
      <span class="octicon octicon-plus left"></span>
      <span class="dropdown-caret"></span>
    </a>

    <div class="dropdown-menu-content js-menu-content">
      <ul class="dropdown-menu dropdown-menu-sw">
        
<a class="dropdown-item" href="/new" data-ga-click="Header, create new repository">
  New repository
</a>


  <a class="dropdown-item" href="/organizations/new" data-ga-click="Header, create new organization">
    New organization
  </a>



  <div class="dropdown-divider"></div>
  <div class="dropdown-header">
    <span title="jrburke/r.js">This repository</span>
  </div>
    <a class="dropdown-item" href="/jrburke/r.js/issues/new" data-ga-click="Header, create new issue">
      New issue
    </a>

      </ul>
    </div>
  </li>

  <li class="header-nav-item dropdown js-menu-container">
    <a class="header-nav-link name tooltipped tooltipped-s js-menu-target" href="/shahrzadmn"
       aria-label="View profile and more"
       data-ga-click="Header, show menu, icon:avatar">
      <img alt="@shahrzadmn" class="avatar" height="20" src="https://avatars1.githubusercontent.com/u/12754169?v=3&amp;s=40" width="20" />
      <span class="dropdown-caret"></span>
    </a>

    <div class="dropdown-menu-content js-menu-content">
      <div class="dropdown-menu dropdown-menu-sw">
        <div class="dropdown-header header-nav-current-user css-truncate">
          Signed in as <strong class="css-truncate-target">shahrzadmn</strong>
        </div>
        <div class="dropdown-divider"></div>

        <a class="dropdown-item" href="/shahrzadmn" data-ga-click="Header, go to profile, text:your profile">
          Your profile
        </a>
        <a class="dropdown-item" href="/stars" data-ga-click="Header, go to starred repos, text:your stars">
          Your stars
        </a>
        <a class="dropdown-item" href="/explore" data-ga-click="Header, go to explore, text:explore">
          Explore
        </a>
        <a class="dropdown-item" href="https://help.github.com" data-ga-click="Header, go to help, text:help">
          Help
        </a>
        <div class="dropdown-divider"></div>

        <a class="dropdown-item" href="/settings/profile" data-ga-click="Header, go to settings, icon:settings">
          Settings
        </a>

        <form accept-charset="UTF-8" action="/logout" class="logout-form" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="AVqNgUFBZEyKLZSpLxnQn3tTzYdI6/0/7QHO/I44O0hlny+q3wYr6HmB73JasaFk2ioZ0s8gd8UAM7lit7SNDA==" /></div>
          <button class="dropdown-item dropdown-signout" data-ga-click="Header, sign out, icon:logout">
            Sign out
          </button>
</form>      </div>
    </div>
  </li>
</ul>


    
  </div>
</div>

        

        


      <div id="start-of-content" class="accessibility-aid"></div>
          <div class="site" itemscope itemtype="http://schema.org/WebPage">
    <div id="js-flash-container">
      
    </div>
    <div class="pagehead repohead instapaper_ignore readability-menu">
      <div class="container">

        
<ul class="pagehead-actions">

  <li>
      <form accept-charset="UTF-8" action="/notifications/subscribe" class="js-social-container" data-autosubmit="true" data-remote="true" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="MWq5mtwreRBqdkzwPps7WwXTFXE0Pc1F/3OtJEkCBKSgVWzjM2VNil3O8VDfxKL7iG6/bvonMZvVK4nYjH4vXg==" /></div>    <input id="repository_id" name="repository_id" type="hidden" value="1735985" />

      <div class="select-menu js-menu-container js-select-menu">
        <a href="/jrburke/r.js/subscription"
          class="btn btn-sm btn-with-count select-menu-button js-menu-target" role="button" tabindex="0" aria-haspopup="true"
          data-ga-click="Repository, click Watch settings, action:files#disambiguate">
          <span class="js-select-button">
            <span class="octicon octicon-eye"></span>
            Watch
          </span>
        </a>
        <a class="social-count js-social-count" href="/jrburke/r.js/watchers">
          103
        </a>

        <div class="select-menu-modal-holder">
          <div class="select-menu-modal subscription-menu-modal js-menu-content" aria-hidden="true">
            <div class="select-menu-header">
              <span class="select-menu-title">Notifications</span>
              <span class="octicon octicon-x js-menu-close" role="button" aria-label="Close"></span>
            </div>

            <div class="select-menu-list js-navigation-container" role="menu">

              <div class="select-menu-item js-navigation-item selected" role="menuitem" tabindex="0">
                <span class="select-menu-item-icon octicon octicon-check"></span>
                <div class="select-menu-item-text">
                  <input checked="checked" id="do_included" name="do" type="radio" value="included" />
                  <span class="select-menu-item-heading">Not watching</span>
                  <span class="description">Be notified when participating or @mentioned.</span>
                  <span class="js-select-button-text hidden-select-button-text">
                    <span class="octicon octicon-eye"></span>
                    Watch
                  </span>
                </div>
              </div>

              <div class="select-menu-item js-navigation-item " role="menuitem" tabindex="0">
                <span class="select-menu-item-icon octicon octicon octicon-check"></span>
                <div class="select-menu-item-text">
                  <input id="do_subscribed" name="do" type="radio" value="subscribed" />
                  <span class="select-menu-item-heading">Watching</span>
                  <span class="description">Be notified of all conversations.</span>
                  <span class="js-select-button-text hidden-select-button-text">
                    <span class="octicon octicon-eye"></span>
                    Unwatch
                  </span>
                </div>
              </div>

              <div class="select-menu-item js-navigation-item " role="menuitem" tabindex="0">
                <span class="select-menu-item-icon octicon octicon-check"></span>
                <div class="select-menu-item-text">
                  <input id="do_ignore" name="do" type="radio" value="ignore" />
                  <span class="select-menu-item-heading">Ignoring</span>
                  <span class="description">Never be notified.</span>
                  <span class="js-select-button-text hidden-select-button-text">
                    <span class="octicon octicon-mute"></span>
                    Stop ignoring
                  </span>
                </div>
              </div>

            </div>

          </div>
        </div>
      </div>
</form>
  </li>

  <li>
    
  <div class="js-toggler-container js-social-container starring-container ">

    <form accept-charset="UTF-8" action="/jrburke/r.js/unstar" class="js-toggler-form starred js-unstar-button" data-remote="true" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="PHzsss0oBnSJ76rk9zJZGraV47a3/bHfl18wddodgVjtTFRRuaDErnj82/pWJuIc3QlclK9MUXB7W/V/NEBcaw==" /></div>
      <button
        class="btn btn-sm btn-with-count js-toggler-target"
        aria-label="Unstar this repository" title="Unstar jrburke/r.js"
        data-ga-click="Repository, click unstar button, action:files#disambiguate; text:Unstar">
        <span class="octicon octicon-star"></span>
        Unstar
      </button>
        <a class="social-count js-social-count" href="/jrburke/r.js/stargazers">
          1,926
        </a>
</form>
    <form accept-charset="UTF-8" action="/jrburke/r.js/star" class="js-toggler-form unstarred js-star-button" data-remote="true" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="45Zvx01f+6p4XpR4yA6hMxvvgHZgtZBkoa5AGvvvDD/f1d3f6PO5kC1f6X8Fbcv1PARLEp+7bPAIBQl6nFCZ6A==" /></div>
      <button
        class="btn btn-sm btn-with-count js-toggler-target"
        aria-label="Star this repository" title="Star jrburke/r.js"
        data-ga-click="Repository, click star button, action:files#disambiguate; text:Star">
        <span class="octicon octicon-star"></span>
        Star
      </button>
        <a class="social-count js-social-count" href="/jrburke/r.js/stargazers">
          1,926
        </a>
</form>  </div>

  </li>

        <li>
          <form accept-charset="UTF-8" action="/jrburke/r.js/fork" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="dc7QQ0/TqxP5g3IpklTB+ya9EcbC+ODakQE+IvkSDREx0nxMBkBF/vswAMNlJQPImDrQerTLCp7a1GmH4E6tcQ==" /></div>
            <button
                type="submit"
                class="btn btn-sm btn-with-count"
                data-ga-click="Repository, show fork modal, action:files#disambiguate; text:Fork"
                title="Fork your own copy of jrburke/r.js to your account"
                aria-label="Fork your own copy of jrburke/r.js to your account">
              <span class="octicon octicon-repo-forked"></span>
              Fork
            </button>
            <a href="/jrburke/r.js/network" class="social-count">474</a>
</form>        </li>

</ul>

        <h1 itemscope itemtype="http://data-vocabulary.org/Breadcrumb" class="entry-title public">
          <span class="mega-octicon octicon-repo"></span>
          <span class="author"><a href="/jrburke" class="url fn" itemprop="url" rel="author"><span itemprop="title">jrburke</span></a></span><!--
       --><span class="path-divider">/</span><!--
       --><strong><a href="/jrburke/r.js" data-pjax="#js-repo-pjax-container">r.js</a></strong>

          <span class="page-context-loader">
            <img alt="" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
          </span>

        </h1>
      </div><!-- /.container -->
    </div><!-- /.repohead -->

    <div class="container">
      <div class="repository-with-sidebar repo-container new-discussion-timeline with-full-navigation ">
        <div class="repository-sidebar clearfix">
            
<nav class="sunken-menu repo-nav js-repo-nav js-sidenav-container-pjax js-octicon-loaders"
     role="navigation"
     data-pjax="#js-repo-pjax-container"
     data-issue-count-url="/jrburke/r.js/issues/counts">
  <ul class="sunken-menu-group">
    <li class="tooltipped tooltipped-w" aria-label="Code">
      <a href="/jrburke/r.js" aria-label="Code" class="selected js-selected-navigation-item sunken-menu-item" data-hotkey="g c" data-selected-links="repo_source repo_downloads repo_commits repo_releases repo_tags repo_branches /jrburke/r.js">
        <span class="octicon octicon-code"></span> <span class="full-word">Code</span>
        <img alt="" class="mini-loader" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
</a>    </li>

      <li class="tooltipped tooltipped-w" aria-label="Issues">
        <a href="/jrburke/r.js/issues" aria-label="Issues" class="js-selected-navigation-item sunken-menu-item" data-hotkey="g i" data-selected-links="repo_issues repo_labels repo_milestones /jrburke/r.js/issues">
          <span class="octicon octicon-issue-opened"></span> <span class="full-word">Issues</span>
          <span class="js-issue-replace-counter"></span>
          <img alt="" class="mini-loader" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
</a>      </li>

    <li class="tooltipped tooltipped-w" aria-label="Pull requests">
      <a href="/jrburke/r.js/pulls" aria-label="Pull requests" class="js-selected-navigation-item sunken-menu-item" data-hotkey="g p" data-selected-links="repo_pulls /jrburke/r.js/pulls">
          <span class="octicon octicon-git-pull-request"></span> <span class="full-word">Pull requests</span>
          <span class="js-pull-replace-counter"></span>
          <img alt="" class="mini-loader" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
</a>    </li>

      <li class="tooltipped tooltipped-w" aria-label="Wiki">
        <a href="/jrburke/r.js/wiki" aria-label="Wiki" class="js-selected-navigation-item sunken-menu-item" data-hotkey="g w" data-selected-links="repo_wiki /jrburke/r.js/wiki">
          <span class="octicon octicon-book"></span> <span class="full-word">Wiki</span>
          <img alt="" class="mini-loader" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
</a>      </li>
  </ul>
  <div class="sunken-menu-separator"></div>
  <ul class="sunken-menu-group">

    <li class="tooltipped tooltipped-w" aria-label="Pulse">
      <a href="/jrburke/r.js/pulse" aria-label="Pulse" class="js-selected-navigation-item sunken-menu-item" data-selected-links="pulse /jrburke/r.js/pulse">
        <span class="octicon octicon-pulse"></span> <span class="full-word">Pulse</span>
        <img alt="" class="mini-loader" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
</a>    </li>

    <li class="tooltipped tooltipped-w" aria-label="Graphs">
      <a href="/jrburke/r.js/graphs" aria-label="Graphs" class="js-selected-navigation-item sunken-menu-item" data-selected-links="repo_graphs repo_contributors /jrburke/r.js/graphs">
        <span class="octicon octicon-graph"></span> <span class="full-word">Graphs</span>
        <img alt="" class="mini-loader" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
</a>    </li>
  </ul>


</nav>

              <div class="only-with-full-nav">
                  
<div class="js-clone-url clone-url open"
  data-protocol-type="http">
  <h3><span class="text-emphasized">HTTPS</span> clone URL</h3>
  <div class="input-group js-zeroclipboard-container">
    <input type="text" class="input-mini input-monospace js-url-field js-zeroclipboard-target"
           value="https://github.com/jrburke/r.js.git" readonly="readonly">
    <span class="input-group-button">
      <button aria-label="Copy to clipboard" class="js-zeroclipboard btn btn-sm zeroclipboard-button tooltipped tooltipped-s" data-copied-hint="Copied!" type="button"><span class="octicon octicon-clippy"></span></button>
    </span>
  </div>
</div>

  
<div class="js-clone-url clone-url "
  data-protocol-type="ssh">
  <h3><span class="text-emphasized">SSH</span> clone URL</h3>
  <div class="input-group js-zeroclipboard-container">
    <input type="text" class="input-mini input-monospace js-url-field js-zeroclipboard-target"
           value="git@github.com:jrburke/r.js.git" readonly="readonly">
    <span class="input-group-button">
      <button aria-label="Copy to clipboard" class="js-zeroclipboard btn btn-sm zeroclipboard-button tooltipped tooltipped-s" data-copied-hint="Copied!" type="button"><span class="octicon octicon-clippy"></span></button>
    </span>
  </div>
</div>

  
<div class="js-clone-url clone-url "
  data-protocol-type="subversion">
  <h3><span class="text-emphasized">Subversion</span> checkout URL</h3>
  <div class="input-group js-zeroclipboard-container">
    <input type="text" class="input-mini input-monospace js-url-field js-zeroclipboard-target"
           value="https://github.com/jrburke/r.js" readonly="readonly">
    <span class="input-group-button">
      <button aria-label="Copy to clipboard" class="js-zeroclipboard btn btn-sm zeroclipboard-button tooltipped tooltipped-s" data-copied-hint="Copied!" type="button"><span class="octicon octicon-clippy"></span></button>
    </span>
  </div>
</div>



<div class="clone-options">You can clone with
  <form accept-charset="UTF-8" action="/users/set_protocol?protocol_selector=http&amp;protocol_type=clone" class="inline-form js-clone-selector-form is-enabled" data-remote="true" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="4QDKJ7a2Ny7w7QGVsr1l1wb91cXKuzOQs7VnKp1csJXVnfSXBY/Y6ECGsK/pwDyVI6PRu3Qvhu5viM+NUVIuKQ==" /></div><button class="btn-link js-clone-selector" data-protocol="http" type="submit">HTTPS</button></form>, <form accept-charset="UTF-8" action="/users/set_protocol?protocol_selector=ssh&amp;protocol_type=clone" class="inline-form js-clone-selector-form is-enabled" data-remote="true" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="fmoWyW/fkccz04+yuRO5uhHcrK+9vXr4eD3YMyWKFHroCay3nX78PGQaZT1Lkk46bSxfXXdCZkFLwH8UjrQEZw==" /></div><button class="btn-link js-clone-selector" data-protocol="ssh" type="submit">SSH</button></form>, or <form accept-charset="UTF-8" action="/users/set_protocol?protocol_selector=subversion&amp;protocol_type=clone" class="inline-form js-clone-selector-form is-enabled" data-remote="true" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="M94YEL3DvJBeE8iJGVpUx5HuPe0TGIV2gYU+wyekxVAc3j1MeYCJx0RMHJngGWZPRMcE6jnT96pfS4oyLrC5gw==" /></div><button class="btn-link js-clone-selector" data-protocol="subversion" type="submit">Subversion</button></form>.
  <a href="https://help.github.com/articles/which-remote-url-should-i-use" class="help tooltipped tooltipped-n" aria-label="Get help on which URL is right for you.">
    <span class="octicon octicon-question"></span>
  </a>
</div>


  <a href="github-windows://openRepo/https://github.com/jrburke/r.js" class="btn btn-sm sidebar-button" title="Save jrburke/r.js to your computer and use it in GitHub Desktop." aria-label="Save jrburke/r.js to your computer and use it in GitHub Desktop.">
    <span class="octicon octicon-device-desktop"></span>
    Clone in Desktop
  </a>


                <a href="/jrburke/r.js/archive/master.zip"
                   class="btn btn-sm sidebar-button"
                   aria-label="Download the contents of jrburke/r.js as a zip file"
                   title="Download the contents of jrburke/r.js as a zip file"
                   rel="nofollow">
                  <span class="octicon octicon-cloud-download"></span>
                  Download ZIP
                </a>
              </div>
        </div><!-- /.repository-sidebar -->

        <div id="js-repo-pjax-container" class="repository-content context-loader-container" data-pjax-container>

          
<span id="js-show-full-navigation"></span>

<div class="repository-meta js-details-container ">
    <div class="repository-description">
      Runs RequireJS in Node and Rhino, and used to run the RequireJS optimizer
    </div>



</div>

<div class="overall-summary overall-summary-bottomless">

  <div class="stats-switcher-viewport js-stats-switcher-viewport">
    <div class="stats-switcher-wrapper">
    <ul class="numbers-summary">
      <li class="commits">
        <a data-pjax href="/jrburke/r.js/commits/master">
            <span class="octicon octicon-history"></span>
            <span class="num text-emphasized">
              1,641
            </span>
            commits
        </a>
      </li>
      <li>
        <a data-pjax href="/jrburke/r.js/branches">
          <span class="octicon octicon-git-branch"></span>
          <span class="num text-emphasized">
            14
          </span>
          branches
        </a>
      </li>

      <li>
        <a data-pjax href="/jrburke/r.js/releases">
          <span class="octicon octicon-tag"></span>
          <span class="num text-emphasized">
            58
          </span>
          releases
        </a>
      </li>

      <li>
        
  <a href="/jrburke/r.js/graphs/contributors">
    <span class="octicon octicon-organization"></span>
    <span class="num text-emphasized">
      49
    </span>
    contributors
  </a>
      </li>
    </ul>

      <div class="repository-lang-stats">
        <ol class="repository-lang-stats-numbers">
          <li>
              <a href="/jrburke/r.js/search?l=javascript">
                <span class="color-block language-color" style="background-color:#f1e05a;"></span>
                <span class="lang">JavaScript</span>
                <span class="percent">99.6%</span>
              </a>
          </li>
          <li>
              <span class="other">
                <span class="color-block language-color" style="background-color:#ededed;"></span>
                <span class="lang">Other</span>
                <span class="percent">0.4%</span>
              </span>
          </li>
        </ol>
      </div>
    </div>
  </div>

</div>

  <div class="repository-lang-stats-graph js-toggle-lang-stats" title="Click for language details">
    <span class="language-color" aria-label="JavaScript 99.6%" style="width:99.6%; background-color:#f1e05a;" itemprop="keywords">JavaScript</span>
    <span class="language-color" aria-label="Other 0.4%" style="width:0.4%; background-color:#ededed;" itemprop="keywords">Other</span>
  </div>

<include-fragment src="/jrburke/r.js/show_partial?partial=tree%2Frecently_touched_branches_list"></include-fragment>

<div class="file-navigation in-mid-page">
  <a href="/jrburke/r.js/find/master"
        class="js-show-file-finder btn btn-sm empty-icon tooltipped tooltipped-s right"
        data-pjax
        data-hotkey="t"
        aria-label="Quickly jump between files">
    <span class="octicon octicon-list-unordered"></span>
  </a>
    <a href="/jrburke/r.js/compare" aria-label="Compare, review, create a pull request" class="btn btn-sm btn-primary tooltipped tooltipped-se left compare-button" aria-label="Compare &amp; review" data-pjax data-ga-click="Repository, go to compare view, location:repo overview; icon:git-compare">
      <span class="octicon octicon-git-compare"></span>
    </a>

  
<div class="select-menu js-menu-container js-select-menu left">
  <span class="btn btn-sm select-menu-button js-menu-target css-truncate" data-hotkey="w"
    data-ref="master"
    title="master"
    role="button" aria-label="Switch branches or tags" tabindex="0" aria-haspopup="true">
    <span class="octicon octicon-git-branch"></span>
    <i>branch:</i>
    <span class="js-select-button css-truncate-target">master</span>
  </span>

  <div class="select-menu-modal-holder js-menu-content js-navigation-container" data-pjax aria-hidden="true">

    <div class="select-menu-modal">
      <div class="select-menu-header">
        <span class="select-menu-title">Switch branches/tags</span>
        <span class="octicon octicon-x js-menu-close" role="button" aria-label="Close"></span>
      </div>

      <div class="select-menu-filters">
        <div class="select-menu-text-filter">
          <input type="text" aria-label="Filter branches/tags" id="context-commitish-filter-field" class="js-filterable-field js-navigation-enable" placeholder="Filter branches/tags">
        </div>
        <div class="select-menu-tabs">
          <ul>
            <li class="select-menu-tab">
              <a href="#" data-tab-filter="branches" data-filter-placeholder="Filter branches/tags" class="js-select-menu-tab">Branches</a>
            </li>
            <li class="select-menu-tab">
              <a href="#" data-tab-filter="tags" data-filter-placeholder="Find a tag…" class="js-select-menu-tab">Tags</a>
            </li>
          </ul>
        </div>
      </div>

      <div class="select-menu-list select-menu-tab-bucket js-select-menu-tab-bucket" data-tab-filter="branches">

        <div data-filterable-for="context-commitish-filter-field" data-filterable-type="substring">


            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/jrburke/r.js/tree/bug27-parse18"
               data-name="bug27-parse18"
               data-skip-pjax="true"
               rel="nofollow">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <span class="select-menu-item-text css-truncate-target" title="bug27-parse18">
                bug27-parse18
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/jrburke/r.js/tree/bug545-update-uglify-esprima"
               data-name="bug545-update-uglify-esprima"
               data-skip-pjax="true"
               rel="nofollow">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <span class="select-menu-item-text css-truncate-target" title="bug545-update-uglify-esprima">
                bug545-update-uglify-esprima
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/jrburke/r.js/tree/dev2.0"
               data-name="dev2.0"
               data-skip-pjax="true"
               rel="nofollow">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <span class="select-menu-item-text css-truncate-target" title="dev2.0">
                dev2.0
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/jrburke/r.js/tree/dev2.0-legacy"
               data-name="dev2.0-legacy"
               data-skip-pjax="true"
               rel="nofollow">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <span class="select-menu-item-text css-truncate-target" title="dev2.0-legacy">
                dev2.0-legacy
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/jrburke/r.js/tree/dev2.1"
               data-name="dev2.1"
               data-skip-pjax="true"
               rel="nofollow">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <span class="select-menu-item-text css-truncate-target" title="dev2.1">
                dev2.1
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/jrburke/r.js/tree/issue-81-mainConfig"
               data-name="issue-81-mainConfig"
               data-skip-pjax="true"
               rel="nofollow">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <span class="select-menu-item-text css-truncate-target" title="issue-81-mainConfig">
                issue-81-mainConfig
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open selected"
               href="/jrburke/r.js/tree/master"
               data-name="master"
               data-skip-pjax="true"
               rel="nofollow">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <span class="select-menu-item-text css-truncate-target" title="master">
                master
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/jrburke/r.js/tree/multiWrite"
               data-name="multiWrite"
               data-skip-pjax="true"
               rel="nofollow">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <span class="select-menu-item-text css-truncate-target" title="multiWrite">
                multiWrite
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/jrburke/r.js/tree/onwrite"
               data-name="onwrite"
               data-skip-pjax="true"
               rel="nofollow">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <span class="select-menu-item-text css-truncate-target" title="onwrite">
                onwrite
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/jrburke/r.js/tree/reflect"
               data-name="reflect"
               data-skip-pjax="true"
               rel="nofollow">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <span class="select-menu-item-text css-truncate-target" title="reflect">
                reflect
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/jrburke/r.js/tree/sourceUrl"
               data-name="sourceUrl"
               data-skip-pjax="true"
               rel="nofollow">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <span class="select-menu-item-text css-truncate-target" title="sourceUrl">
                sourceUrl
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/jrburke/r.js/tree/traceFiles"
               data-name="traceFiles"
               data-skip-pjax="true"
               rel="nofollow">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <span class="select-menu-item-text css-truncate-target" title="traceFiles">
                traceFiles
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/jrburke/r.js/tree/uglify2-4-19"
               data-name="uglify2-4-19"
               data-skip-pjax="true"
               rel="nofollow">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <span class="select-menu-item-text css-truncate-target" title="uglify2-4-19">
                uglify2-4-19
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/jrburke/r.js/tree/wsh"
               data-name="wsh"
               data-skip-pjax="true"
               rel="nofollow">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <span class="select-menu-item-text css-truncate-target" title="wsh">
                wsh
              </span>
            </a>
        </div>

          <div class="select-menu-no-results">Nothing to show</div>
      </div>

      <div class="select-menu-list select-menu-tab-bucket js-select-menu-tab-bucket" data-tab-filter="tags">
        <div data-filterable-for="context-commitish-filter-field" data-filterable-type="substring">


            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/jrburke/r.js/tree/latest"
                 data-name="latest"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="latest">latest</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/jrburke/r.js/tree/2.1.18"
                 data-name="2.1.18"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="2.1.18">2.1.18</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/jrburke/r.js/tree/2.1.17"
                 data-name="2.1.17"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="2.1.17">2.1.17</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/jrburke/r.js/tree/2.1.16"
                 data-name="2.1.16"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="2.1.16">2.1.16</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/jrburke/r.js/tree/2.1.15"
                 data-name="2.1.15"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="2.1.15">2.1.15</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/jrburke/r.js/tree/2.1.14"
                 data-name="2.1.14"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="2.1.14">2.1.14</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/jrburke/r.js/tree/2.1.13"
                 data-name="2.1.13"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="2.1.13">2.1.13</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/jrburke/r.js/tree/2.1.12"
                 data-name="2.1.12"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="2.1.12">2.1.12</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/jrburke/r.js/tree/2.1.11"
                 data-name="2.1.11"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="2.1.11">2.1.11</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/jrburke/r.js/tree/2.1.10"
                 data-name="2.1.10"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="2.1.10">2.1.10</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/jrburke/r.js/tree/2.1.9"
                 data-name="2.1.9"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="2.1.9">2.1.9</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/jrburke/r.js/tree/2.1.8"
                 data-name="2.1.8"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="2.1.8">2.1.8</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/jrburke/r.js/tree/2.1.7"
                 data-name="2.1.7"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="2.1.7">2.1.7</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/jrburke/r.js/tree/2.1.6"
                 data-name="2.1.6"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="2.1.6">2.1.6</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/jrburke/r.js/tree/2.1.5"
                 data-name="2.1.5"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="2.1.5">2.1.5</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/jrburke/r.js/tree/2.1.4"
                 data-name="2.1.4"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="2.1.4">2.1.4</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/jrburke/r.js/tree/2.1.3"
                 data-name="2.1.3"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="2.1.3">2.1.3</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/jrburke/r.js/tree/2.1.2"
                 data-name="2.1.2"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="2.1.2">2.1.2</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/jrburke/r.js/tree/2.1.1"
                 data-name="2.1.1"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="2.1.1">2.1.1</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/jrburke/r.js/tree/2.1.0"
                 data-name="2.1.0"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="2.1.0">2.1.0</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/jrburke/r.js/tree/2.0.6"
                 data-name="2.0.6"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="2.0.6">2.0.6</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/jrburke/r.js/tree/2.0.5"
                 data-name="2.0.5"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="2.0.5">2.0.5</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/jrburke/r.js/tree/2.0.4"
                 data-name="2.0.4"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="2.0.4">2.0.4</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/jrburke/r.js/tree/2.0.3"
                 data-name="2.0.3"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="2.0.3">2.0.3</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/jrburke/r.js/tree/2.0.2"
                 data-name="2.0.2"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="2.0.2">2.0.2</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/jrburke/r.js/tree/2.0.1"
                 data-name="2.0.1"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="2.0.1">2.0.1</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/jrburke/r.js/tree/2.0.0"
                 data-name="2.0.0"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="2.0.0">2.0.0</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/jrburke/r.js/tree/1.0.8"
                 data-name="1.0.8"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="1.0.8">1.0.8</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/jrburke/r.js/tree/1.0.7"
                 data-name="1.0.7"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="1.0.7">1.0.7</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/jrburke/r.js/tree/1.0.6"
                 data-name="1.0.6"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="1.0.6">1.0.6</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/jrburke/r.js/tree/1.0.5"
                 data-name="1.0.5"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="1.0.5">1.0.5</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/jrburke/r.js/tree/1.0.4"
                 data-name="1.0.4"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="1.0.4">1.0.4</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/jrburke/r.js/tree/1.0.3"
                 data-name="1.0.3"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="1.0.3">1.0.3</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/jrburke/r.js/tree/1.0.2"
                 data-name="1.0.2"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="1.0.2">1.0.2</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/jrburke/r.js/tree/1.0.1"
                 data-name="1.0.1"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="1.0.1">1.0.1</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/jrburke/r.js/tree/1.0.0"
                 data-name="1.0.0"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="1.0.0">1.0.0</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/jrburke/r.js/tree/0.27.1"
                 data-name="0.27.1"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="0.27.1">0.27.1</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/jrburke/r.js/tree/0.27.0"
                 data-name="0.27.0"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="0.27.0">0.27.0</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/jrburke/r.js/tree/0.26.0"
                 data-name="0.26.0"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="0.26.0">0.26.0</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/jrburke/r.js/tree/0.25.0"
                 data-name="0.25.0"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="0.25.0">0.25.0</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/jrburke/r.js/tree/0.24.0"
                 data-name="0.24.0"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="0.24.0">0.24.0</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/jrburke/r.js/tree/0.23.0"
                 data-name="0.23.0"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="0.23.0">0.23.0</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/jrburke/r.js/tree/0.22.0"
                 data-name="0.22.0"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="0.22.0">0.22.0</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/jrburke/r.js/tree/0.15.0"
                 data-name="0.15.0"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="0.15.0">0.15.0</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/jrburke/r.js/tree/0.14.5"
                 data-name="0.14.5"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="0.14.5">0.14.5</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/jrburke/r.js/tree/0.14.4"
                 data-name="0.14.4"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="0.14.4">0.14.4</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/jrburke/r.js/tree/0.14.3"
                 data-name="0.14.3"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="0.14.3">0.14.3</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/jrburke/r.js/tree/0.14.2"
                 data-name="0.14.2"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="0.14.2">0.14.2</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/jrburke/r.js/tree/0.14.1"
                 data-name="0.14.1"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="0.14.1">0.14.1</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/jrburke/r.js/tree/0.14.0"
                 data-name="0.14.0"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="0.14.0">0.14.0</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/jrburke/r.js/tree/0.13.0"
                 data-name="0.13.0"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="0.13.0">0.13.0</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/jrburke/r.js/tree/0.12.0"
                 data-name="0.12.0"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="0.12.0">0.12.0</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/jrburke/r.js/tree/0.11.0"
                 data-name="0.11.0"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="0.11.0">0.11.0</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/jrburke/r.js/tree/0.10.0"
                 data-name="0.10.0"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="0.10.0">0.10.0</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/jrburke/r.js/tree/0.9.0"
                 data-name="0.9.0"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="0.9.0">0.9.0</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/jrburke/r.js/tree/0.8.0"
                 data-name="0.8.0"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="0.8.0">0.8.0</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/jrburke/r.js/tree/0.2.1"
                 data-name="0.2.1"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="0.2.1">0.2.1</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/jrburke/r.js/tree/0.2.0"
                 data-name="0.2.0"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="0.2.0">0.2.0</a>
            </div>
        </div>

        <div class="select-menu-no-results">Nothing to show</div>
      </div>

    </div>
  </div>
</div>



  <div class="breadcrumb"><span class="repo-root js-repo-root"><span itemscope="" itemtype="http://data-vocabulary.org/Breadcrumb"><a href="/jrburke/r.js" class="" data-branch="master" data-pjax="true" itemscope="url"><span itemprop="title">r.js</span></a></span></span><span class="separator">/</span>
    <form accept-charset="UTF-8" action="/jrburke/r.js/new/master" class="js-new-blob-form inline-form" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="C8ftzrRt1JrGWE8mORtAE2Bh+Cu3g2br5p/9dKt7SElNfar/tTw7sSzyryvsC+dKQVHE9Ozg4vNGTStqrDVvwQ==" /></div>
      <button class="btn-link tooltipped tooltipped-e" type="submit" data-disable-with="working…" aria-label="Fork this project and create a new file">
        <span class="js-new-blob-submit octicon octicon-plus"></span>
      </button>
</form></div>
</div>



  
  <div class="commit commit-tease js-details-container" >
    <p class="commit-title ">
        <a href="/jrburke/r.js/commit/7129cad707e9b0af9e34819e7c9d1e12a5c10027" class="message" data-pjax="true" title="snapshot">snapshot</a>
        
    </p>
    <div class="commit-meta">
      <button aria-label="Copy SHA" class="js-zeroclipboard zeroclipboard-link tooltipped tooltipped-s" data-clipboard-text="7129cad707e9b0af9e34819e7c9d1e12a5c10027" data-copied-hint="Copied!" type="button"><span class="octicon octicon-clippy"></span></button>
      <a href="/jrburke/r.js/commit/7129cad707e9b0af9e34819e7c9d1e12a5c10027" class="sha-block" data-pjax>latest commit <span class="sha">7129cad707</span></a>

      <div class="authorship">
        <img alt="@jrburke" class="avatar" height="20" src="https://avatars0.githubusercontent.com/u/73359?v=3&amp;s=40" width="20" />
        <span class="author-name"><a href="/jrburke" rel="author">jrburke</a></span>
        authored <time class="updated" datetime="2015-07-12T06:51:28Z" is="relative-time">Jul 11, 2015</time>

      </div>
    </div>
  </div>

  
<div class="file-wrap">
  <a href="/jrburke/r.js/tree/7129cad707e9b0af9e34819e7c9d1e12a5c10027" class="hidden js-permalink-shortcut" data-hotkey="y">Permalink</a>

  <table class="files" data-pjax>


    <tbody>
      <tr class="warning include-fragment-error">
        <td class="icon"><span class="octicon octicon-alert"></span></td>
        <td class="content" colspan="3">Failed to load latest commit information.</td>
      </tr>

        <tr>
          <td class="icon">
            <span class="octicon octicon-file-directory"></span>
            <img alt="" class="spinner" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
          </td>
          <td class="content">
            <span class="css-truncate css-truncate-target"><a href="/jrburke/r.js/tree/master/build" class="js-directory-link" id="b0da275520918e23dd615e2a747528f1-ccc3571aa52a091c6d2452df976b19725f8cecf8" title="build">build</a></span>
          </td>
          <td class="message">
            <span class="css-truncate css-truncate-target">
              <a href="/jrburke/r.js/commit/e44970d0b27ccdac7eeacffa44d20f697dcf613c" class="message" data-pjax="true" title="Fixes #802, set outSourceMap for uglify2 to use .map name, and just let it add sourceMappingURL">Fixes</a> <a href="https://github.com/jrburke/r.js/issues/802" class="issue-link" title="generateSourceMaps adds second sourceMappingURL entry at end of file">#802</a><a href="/jrburke/r.js/commit/e44970d0b27ccdac7eeacffa44d20f697dcf613c" class="message" data-pjax="true" title="Fixes #802, set outSourceMap for uglify2 to use .map name, and just let it add sourceMappingURL">, set outSourceMap for uglify2 to use .map name, and just l…</a>
            </span>
          </td>
          <td class="age">
            <span class="css-truncate css-truncate-target"><time datetime="2015-07-12T06:51:07Z" is="time-ago">Jul 11, 2015</time></span>
          </td>
        </tr>
        <tr>
          <td class="icon">
            <span class="octicon octicon-file-directory"></span>
            <img alt="" class="spinner" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
          </td>
          <td class="content">
            <span class="css-truncate css-truncate-target"><a href="/jrburke/r.js/tree/master/dist" class="js-directory-link" id="2a6d07eef8b10b84129b42424ed99327-51e85830833a3a62d36e7bb9e7fc87441938b254" title="dist">dist</a></span>
          </td>
          <td class="message">
            <span class="css-truncate css-truncate-target">
              <a href="/jrburke/r.js/commit/7129cad707e9b0af9e34819e7c9d1e12a5c10027" class="message" data-pjax="true" title="snapshot">snapshot</a>
            </span>
          </td>
          <td class="age">
            <span class="css-truncate css-truncate-target"><time datetime="2015-07-12T06:51:28Z" is="time-ago">Jul 11, 2015</time></span>
          </td>
        </tr>
        <tr>
          <td class="icon">
            <span class="octicon octicon-file-directory"></span>
            <img alt="" class="spinner" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
          </td>
          <td class="content">
            <span class="css-truncate css-truncate-target"><a href="/jrburke/r.js/tree/master/lib" class="js-directory-link" id="e8acc63b1e238f3255c900eed37254b8-9ca4bbe6dab8b35bcfc44a837150a60e343ced82" title="lib">lib</a></span>
          </td>
          <td class="message">
            <span class="css-truncate css-truncate-target">
              <a href="/jrburke/r.js/commit/938f9e8fd8df7085beefda07ff8c5afab4124f88" class="message" data-pjax="true" title="move incompatible options to createConfig, make sure the non-source maps closure path generates JS strings. Update closure compiler to latest stable release. Refs #303">move incompatible options to createConfig, make sure the non-source m…</a>
            </span>
          </td>
          <td class="age">
            <span class="css-truncate css-truncate-target"><time datetime="2012-11-18T19:55:02Z" is="time-ago">Nov 18, 2012</time></span>
          </td>
        </tr>
        <tr>
          <td class="icon">
            <span class="octicon octicon-file-directory"></span>
            <img alt="" class="spinner" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
          </td>
          <td class="content">
            <span class="css-truncate css-truncate-target"><a href="/jrburke/r.js/tree/master/tests" class="js-directory-link" id="b61a6d542f9036550ba9c401c80f00ef-2482c70e69b31057ac50af95021f11f598054e22" title="tests">tests</a></span>
          </td>
          <td class="message">
            <span class="css-truncate css-truncate-target">
              <a href="/jrburke/r.js/commit/79bd50c653a541b395f88b6c3e884b6267f1ccbd" class="message" data-pjax="true" title="Fixes #740, nashorn support. Thanks to @ceedriic for pointing out API calls needed.">Fixes</a> <a href="https://github.com/jrburke/r.js/pull/740" class="issue-link" title="Add Nashorn Support">#740</a><a href="/jrburke/r.js/commit/79bd50c653a541b395f88b6c3e884b6267f1ccbd" class="message" data-pjax="true" title="Fixes #740, nashorn support. Thanks to @ceedriic for pointing out API calls needed.">, nashorn support. Thanks to</a> <a href="https://github.com/ceedriic" class="user-mention">@ceedriic</a> <a href="/jrburke/r.js/commit/79bd50c653a541b395f88b6c3e884b6267f1ccbd" class="message" data-pjax="true" title="Fixes #740, nashorn support. Thanks to @ceedriic for pointing out API calls needed.">for pointing out API…</a>
            </span>
          </td>
          <td class="age">
            <span class="css-truncate css-truncate-target"><time datetime="2014-12-25T06:29:54Z" is="time-ago">Dec 24, 2014</time></span>
          </td>
        </tr>
        <tr>
          <td class="icon">
            <span class="octicon octicon-file-text"></span>
            <img alt="" class="spinner" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
          </td>
          <td class="content">
            <span class="css-truncate css-truncate-target"><a href="/jrburke/r.js/blob/master/.gitignore" class="js-directory-link" id="a084b794bc0759e7a6b77810e01874f2-24d11c39e928c5c7c89eca30ef6da3821dc8c658" title=".gitignore">.gitignore</a></span>
          </td>
          <td class="message">
            <span class="css-truncate css-truncate-target">
              <a href="/jrburke/r.js/commit/c632700a6ae74681f17847f9d8b4d46f2f2b8085" class="message" data-pjax="true" title="Fixes #825, allow deps as identifier if rest of call looks like AMD call">Fixes</a> <a href="https://github.com/jrburke/r.js/issues/825" class="issue-link" title='"TypeError: undefined is not a function" when compiling code with dynamic dependencies'>#825</a><a href="/jrburke/r.js/commit/c632700a6ae74681f17847f9d8b4d46f2f2b8085" class="message" data-pjax="true" title="Fixes #825, allow deps as identifier if rest of call looks like AMD call">, allow deps as identifier if rest of call looks like AMD call</a>
            </span>
          </td>
          <td class="age">
            <span class="css-truncate css-truncate-target"><time datetime="2015-07-11T01:12:17Z" is="time-ago">Jul 10, 2015</time></span>
          </td>
        </tr>
        <tr>
          <td class="icon">
            <span class="octicon octicon-file-text"></span>
            <img alt="" class="spinner" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
          </td>
          <td class="content">
            <span class="css-truncate css-truncate-target"><a href="/jrburke/r.js/blob/master/LICENSE" class="js-directory-link" id="9879d6db96fd29134fc802214163b95a-9282d5393a2a51fa72f239853b2f4f1262717919" title="LICENSE">LICENSE</a></span>
          </td>
          <td class="message">
            <span class="css-truncate css-truncate-target">
              <a href="/jrburke/r.js/commit/0c16a762e7dab917f48760827ecbbd3bec9374c7" class="message" data-pjax="true" title="update copyright year range">update copyright year range</a>
            </span>
          </td>
          <td class="age">
            <span class="css-truncate css-truncate-target"><time datetime="2014-02-03T10:22:44Z" is="time-ago">Feb 3, 2014</time></span>
          </td>
        </tr>
        <tr>
          <td class="icon">
            <span class="octicon octicon-file-text"></span>
            <img alt="" class="spinner" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
          </td>
          <td class="content">
            <span class="css-truncate css-truncate-target"><a href="/jrburke/r.js/blob/master/README.md" class="js-directory-link" id="04c6e90faac2675aa89e2176d2eec7d8-107f00164a9894e44849199eb2d412ff3cea53cd" title="README.md">README.md</a></span>
          </td>
          <td class="message">
            <span class="css-truncate css-truncate-target">
              <a href="/jrburke/r.js/commit/8dbd2ccecec443bfba7953eaa8b93eafb4678e89" class="message" data-pjax="true" title="Fixes #800, allow arrow functions in require/define APIs">Fixes</a> <a href="https://github.com/jrburke/r.js/issues/800" class="issue-link" title="Allow arrow functions in require/define APIs">#800</a><a href="/jrburke/r.js/commit/8dbd2ccecec443bfba7953eaa8b93eafb4678e89" class="message" data-pjax="true" title="Fixes #800, allow arrow functions in require/define APIs">, allow arrow functions in require/define APIs</a>
            </span>
          </td>
          <td class="age">
            <span class="css-truncate css-truncate-target"><time datetime="2015-03-30T22:37:56Z" is="time-ago">Mar 30, 2015</time></span>
          </td>
        </tr>
        <tr>
          <td class="icon">
            <span class="octicon octicon-file-text"></span>
            <img alt="" class="spinner" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
          </td>
          <td class="content">
            <span class="css-truncate css-truncate-target"><a href="/jrburke/r.js/blob/master/copydist.js" class="js-directory-link" id="7e25fd16aecb983e46893fa643d2e66b-33df017c4497d788134efd710db3a6bc4cf1fd41" title="copydist.js">copydist.js</a></span>
          </td>
          <td class="message">
            <span class="css-truncate css-truncate-target">
              <a href="/jrburke/r.js/commit/9b72ac1ff8115b6a72396675f744276ae743cade" class="message" data-pjax="true" title="snapshot">snapshot</a>
            </span>
          </td>
          <td class="age">
            <span class="css-truncate css-truncate-target"><time datetime="2014-02-15T01:21:15Z" is="time-ago">Feb 14, 2014</time></span>
          </td>
        </tr>
        <tr>
          <td class="icon">
            <span class="octicon octicon-file-text"></span>
            <img alt="" class="spinner" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
          </td>
          <td class="content">
            <span class="css-truncate css-truncate-target"><a href="/jrburke/r.js/blob/master/dist.js" class="js-directory-link" id="51e25d5f87c13b51cc08c1face260991-bc638621601a2f3d839bcde15d414864c1fddd5f" title="dist.js">dist.js</a></span>
          </td>
          <td class="message">
            <span class="css-truncate css-truncate-target">
              <a href="/jrburke/r.js/commit/32247b1be7238e553a40e8186629d5d9287d812a" class="message" data-pjax="true" title="update copyright years">update copyright years</a>
            </span>
          </td>
          <td class="age">
            <span class="css-truncate css-truncate-target"><time datetime="2013-10-23T22:30:34Z" is="time-ago">Oct 23, 2013</time></span>
          </td>
        </tr>
        <tr>
          <td class="icon">
            <span class="octicon octicon-file-text"></span>
            <img alt="" class="spinner" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
          </td>
          <td class="content">
            <span class="css-truncate css-truncate-target"><a href="/jrburke/r.js/blob/master/package.json" class="js-directory-link" id="b9cfc7f2cdf78a7f4b91a753d10865a2-a4f0e803d77ccdec2e88a433355b9752bae9bd17" title="package.json">package.json</a></span>
          </td>
          <td class="message">
            <span class="css-truncate css-truncate-target">
              <a href="/jrburke/r.js/commit/40fa066e6573c304320eac9d43ce37a1e026325d" class="message" data-pjax="true" title="roll back name change, don&#39;t want to also specify versions here. Use git instead">roll back name change, don't want to also specify versions here. Use …</a>
            </span>
          </td>
          <td class="age">
            <span class="css-truncate css-truncate-target"><time datetime="2013-03-05T18:34:50Z" is="time-ago">Mar 5, 2013</time></span>
          </td>
        </tr>
        <tr>
          <td class="icon">
            <span class="octicon octicon-file-text"></span>
            <img alt="" class="spinner" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
          </td>
          <td class="content">
            <span class="css-truncate css-truncate-target"><a href="/jrburke/r.js/blob/master/require.js" class="js-directory-link" id="d362f3c32c5f0acb81e344969e574cb4-36280477eed7ceafb3f593c29ad9428f3a9b5a8a" title="require.js">require.js</a></span>
          </td>
          <td class="message">
            <span class="css-truncate css-truncate-target">
              <a href="/jrburke/r.js/commit/df7531c54e04c04f8c19c236870a0e9c3791a70a" class="message" data-pjax="true" title="rev for 2.1.18">rev for 2.1.18</a>
            </span>
          </td>
          <td class="age">
            <span class="css-truncate css-truncate-target"><time datetime="2015-05-29T17:03:30Z" is="time-ago">May 29, 2015</time></span>
          </td>
        </tr>
        <tr>
          <td class="icon">
            <span class="octicon octicon-file-text"></span>
            <img alt="" class="spinner" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
          </td>
          <td class="content">
            <span class="css-truncate css-truncate-target"><a href="/jrburke/r.js/blob/master/tasks.txt" class="js-directory-link" id="3564bbfa9138c62eaadbadb5be86f117-9c671e207b88f8027191a55815b8e4e43c563863" title="tasks.txt">tasks.txt</a></span>
          </td>
          <td class="message">
            <span class="css-truncate css-truncate-target">
              <a href="/jrburke/r.js/commit/0f5c86c12d399439d4f464cf060c2f9f4b443841" class="message" data-pjax="true" title="adding support for optimizing all plugin resources. Still a bit experimental.">adding support for optimizing all plugin resources. Still a bit exper…</a>
            </span>
          </td>
          <td class="age">
            <span class="css-truncate css-truncate-target"><time datetime="2011-05-26T23:25:11Z" is="time-ago">May 26, 2011</time></span>
          </td>
        </tr>
    </tbody>
  </table>

</div>


  <div id="readme" class="boxed-group flush clearfix announce instapaper_body md">
    <h3>
      <span class="octicon octicon-book"></span>
      README.md
    </h3>

    <article class="markdown-body entry-content" itemprop="mainContentOfPage"><h1><a id="user-content-rjs" class="anchor" href="#rjs" aria-hidden="true"><span class="octicon octicon-link"></span></a>r.js</h1>

<p>A command line tool for running JavaScript scripts that use the
<a href="https://github.com/amdjs/amdjs-api/blob/master/AMD.md">Asychronous Module Defintion API (AMD)</a>
for declaring and using JavaScript modules and regular JavaScript script files.</p>

<p>It is part of the <a href="http://requirejs.org">RequireJS project</a>, and works with
the RequireJS implementation of AMD.</p>

<p>r.js is a single script that has two major functions:</p>

<ul>
<li>Run AMD-based projects <a href="http://requirejs.org/docs/node.html">in Node</a> and Nashorn, Rhino and xpcshell.</li>
<li>Includes the <a href="http://requirejs.org/docs/optimization.html">RequireJS Optimizer</a>
that combines scripts for optimal browser delivery.</li>
</ul>

<h1><a id="user-content-installation" class="anchor" href="#installation" aria-hidden="true"><span class="octicon octicon-link"></span></a>Installation</h1>

<h2><a id="user-content-node" class="anchor" href="#node" aria-hidden="true"><span class="octicon octicon-link"></span></a>Node</h2>

<pre><code>npm install -g requirejs
</code></pre>

<p>From then on, you can use <code>r.js</code> on the command line to run the optimizer.</p>

<h2><a id="user-content-nashornrhinobrowser" class="anchor" href="#nashornrhinobrowser" aria-hidden="true"><span class="octicon octicon-link"></span></a>Nashorn/Rhino/Browser</h2>

<p>Download the latest release from the
<a href="http://requirejs.org/docs/download.html#rjs">RequireJS download page</a>.</p>

<h2><a id="user-content-xpcshell" class="anchor" href="#xpcshell" aria-hidden="true"><span class="octicon octicon-link"></span></a>xpcshell</h2>

<p><a href="https://developer.mozilla.org/en-US/docs/XPConnect/xpcshell">xpcshell</a> support
was added in r.js version 2.1.5, so use that r.js version or later.</p>

<p>Download the latest release of r.js from the
<a href="http://requirejs.org/docs/download.html#rjs">RequireJS download page</a>.</p>

<h2><a id="user-content-from-this-repo" class="anchor" href="#from-this-repo" aria-hidden="true"><span class="octicon octicon-link"></span></a>From this repo</h2>

<p>r.js is made up of a series of modules that are built into one file for
distribution. The <strong>dist</strong> directory contains the built version of the
code. In the master branch, it should match the current state of the master
code.</p>

<p>If you are doing local modifications from a clone of this repo, you can run
the following command to generate an r.js at the root of this repo:</p>

<pre><code>node dist.js
</code></pre>

<p>To generate an r.js that also gets copied to <strong>dist</strong> with a time stamp, run:</p>

<pre><code>./copydist.js
</code></pre>

<h1><a id="user-content-running-amd-based-projects" class="anchor" href="#running-amd-based-projects" aria-hidden="true"><span class="octicon octicon-link"></span></a>Running AMD-based projects</h1>

<p>If your JS project's main application file is called main.js, then do
the following:</p>

<h2><a id="user-content-node-1" class="anchor" href="#node-1" aria-hidden="true"><span class="octicon octicon-link"></span></a>Node</h2>

<pre><code>r.js main.js
</code></pre>

<p>Requires Node 0.4 or later.</p>

<p>r.js allows using Node modules installed via npm. For more info see the
<a href="http://requirejs.org/docs/node.html">Use with Node</a> docs.</p>

<h2><a id="user-content-java" class="anchor" href="#java" aria-hidden="true"><span class="octicon octicon-link"></span></a>Java</h2>

<h3><a id="user-content-nashorn" class="anchor" href="#nashorn" aria-hidden="true"><span class="octicon octicon-link"></span></a>Nashorn</h3>

<p>As of r.js 2.1.16, r.js can run in <a href="http://www.oracle.com/technetwork/articles/java/jf14-nashorn-2126515.html">Nashorn</a>, Java 8+'s JavaScript engine, via the <code>jjs</code> command line tool that is installed with Java.</p>

<p>Then general format of the command:</p>

<pre><code>jjs -scripting path/to/r.js -- [r.js command line arguments here]
</code></pre>

<p>Examples:</p>

<pre><code># Calling r.js to optimize a project using the build config in build.js
jjs -scripting path/to/r.js -- -o build.js

# Calling r.js to run AMD modules, where the main app program is main.js
jjs -scripting path/to/r.js -- main.js

</code></pre>

<p>All further examples will use the Node notation, but substitute the <strong>r.js</strong> references below with the command line structure mentioned above (<code>jjs -scripting path/to/r.js --</code>).</p>

<h3><a id="user-content-rhino" class="anchor" href="#rhino" aria-hidden="true"><span class="octicon octicon-link"></span></a>Rhino</h3>

<p>Using Rhino requires some JAR files in the CLASSPATH for it to work:</p>

<ul>
<li><a href="https://github.com/jrburke/r.js/blob/master/lib/rhino/js.jar?raw=true">rhino.jar</a> from the <a href="http://www.mozilla.org/rhino/">Rhino project</a>.</li>
<li><a href="https://github.com/jrburke/r.js/blob/master/lib/closure/compiler.jar?raw=true">compiler.jar</a> if you are using the optimizer and want to use
<a href="http://code.google.com/closure/compiler/">Closure Compiler</a>.</li>
</ul>

<p>Download those files to your machine. To run r.js, you can use this type of
command:</p>

<h3><a id="user-content-os-xlinuxunix" class="anchor" href="#os-xlinuxunix" aria-hidden="true"><span class="octicon octicon-link"></span></a>OS X/Linux/Unix:</h3>

<pre><code>java -classpath path/to/rhino/js.jar:path/to/closure/compiler.jar org.mozilla.javascript.tools.shell.Main r.js main.js
</code></pre>

<h3><a id="user-content-windows" class="anchor" href="#windows" aria-hidden="true"><span class="octicon octicon-link"></span></a>Windows</h3>

<pre><code>java -classpath path/to/rhino/js.jar;path/to/closure/compiler.jar org.mozilla.javascript.tools.shell.Main r.js main.js
</code></pre>

<p>If you want to run it in the debugger, replace
org.mozilla.javascript.tools.shell.Main with
<strong>org.mozilla.javascript.tools.debugger.Main</strong>.</p>

<p>All further examples will use the Node notation, but substitute the <strong>r.js</strong> references below with the appropriate java command.</p>

<h2><a id="user-content-xpcshell-1" class="anchor" href="#xpcshell-1" aria-hidden="true"><span class="octicon octicon-link"></span></a>xpcshell</h2>

<p>To run the optimizer using a build config file or command line build options:</p>

<pre><code>path/to/xpcshell path/to/r.js -o buildconfig.js
</code></pre>

<p>r.js can also be used as a library in another .js file run via xpcshell.</p>

<ul>
<li><a href="https://github.com/jrburke/r.js/blob/master/tests/xpcshell/run.js">tests/xpcshell/run.js</a>:
shows how to load AMD modules by using r.js as a library.</li>
<li><a href="https://github.com/jrburke/r.js/blob/master/tests/xpcshell/build.js">tests/xpcshell/build.js</a>:
shows how to trigger the optimizer from within another .js file.</li>
</ul>

<h1><a id="user-content-optimizer" class="anchor" href="#optimizer" aria-hidden="true"><span class="octicon octicon-link"></span></a>Optimizer</h1>

<p>The optimizer can be run by passing the <strong>-o</strong> command to r.js:</p>

<pre><code>r.js -o path/to/buildconfig.js
</code></pre>

<p>See the <a href="http://requirejs.org/docs/optimization.html">Optimization doc</a> for more
information on the optimizer.</p>

<p>If running in <strong>Java</strong>, be sure to grab the Rhino and Closure Compiler jar files in the lib/ directory, then run this command:</p>

<h3><a id="user-content-os-xlinuxunix-1" class="anchor" href="#os-xlinuxunix-1" aria-hidden="true"><span class="octicon octicon-link"></span></a>OS X/Linux/Unix:</h3>

<pre><code>java -classpath path/to/rhino/js.jar:path/to/closure/compiler.jar org.mozilla.javascript.tools.shell.Main r.js -o path/to/buildconfig.js
</code></pre>

<h3><a id="user-content-windows-1" class="anchor" href="#windows-1" aria-hidden="true"><span class="octicon octicon-link"></span></a>Windows</h3>

<pre><code>java -classpath path/to/rhino/js.jar;path/to/closure/compiler.jar org.mozilla.javascript.tools.shell.Main r.js -o path/to/buildconfig.js
</code></pre>

<h2><a id="user-content-what-makes-it-special" class="anchor" href="#what-makes-it-special" aria-hidden="true"><span class="octicon octicon-link"></span></a>What makes it special</h2>

<p>The optimizer is better than using a plain concatenation script because it runs
require.js as part of the optimization, so it knows how to:</p>

<ul>
<li>Use <a href="http://requirejs.org/docs/plugins.html">Loader Plugins</a> to load non-script
dependencies and inline them in built files.</li>
<li><a href="http://requirejs.org/docs/api.html#modulename">Name anonymous modules</a>.
If your optimization step does not do this, and you use anonymous modules, you
will get errors running the built code.</li>
</ul>

<h1><a id="user-content-other-rjs-commands" class="anchor" href="#other-rjs-commands" aria-hidden="true"><span class="octicon octicon-link"></span></a>Other r.js commands</h1>

<h2><a id="user-content-get-version" class="anchor" href="#get-version" aria-hidden="true"><span class="octicon octicon-link"></span></a>Get Version</h2>

<p>To get the version of r.js and the version of require.js used by r.js:</p>

<pre><code>r.js -v
</code></pre>

<h2><a id="user-content-convert-commonjs-modules" class="anchor" href="#convert-commonjs-modules" aria-hidden="true"><span class="octicon octicon-link"></span></a>Convert CommonJS modules</h2>

<p>To convert a directory of CommonJS modules to ones that have define() wrappers:</p>

<pre><code>r.js -convert path/to/commonjs/dir output/dir
</code></pre>

<p>Most, but not all, CommonJS modules can be converted to define()-wrapped modules
and still work.</p>

<p>However, there are some modules that may fail if:</p>

<ul>
<li>They use code branches like if/else or try/catch to call require(). There are
problems supporting this kind of dynamic module calls in an async environment.</li>
<li>Some kinds of circular dependencies will not work right. The kinds that fail
are normally very brittle and depend on the execution order of the dependent
modules.</li>
</ul>

<h1><a id="user-content-directory-layout" class="anchor" href="#directory-layout" aria-hidden="true"><span class="octicon octicon-link"></span></a>Directory layout</h1>

<h2><a id="user-content-directory-prerequisites" class="anchor" href="#directory-prerequisites" aria-hidden="true"><span class="octicon octicon-link"></span></a>Directory prerequisites</h2>

<p>r.js assumes that there are some other projects checked out as sibling
directories to it, and named certain names, in order for the tests to pass.</p>

<p>So it is best to create the following directory structure with the following
git clone commands:</p>

<pre><code>mkdir requirejs
cd requirejs
git clone git://github.com/jrburke/r.js.git
git clone git://github.com/jrburke/requirejs.git
git clone git://github.com/requirejs/text.git
</code></pre>

<p>So there should be a sibling <code>requirejs</code> and <code>text</code> directories to the r.js
directory containing your clone of the r.js project.</p>

<h2><a id="user-content-directory-details" class="anchor" href="#directory-details" aria-hidden="true"><span class="octicon octicon-link"></span></a>Directory details</h2>

<p>The r.js project has the following directory layout:</p>

<ul>
<li><strong>dist.js</strong>: the script that builds r.js</li>
<li><strong>require.js</strong>: the version of require.js to include in r.js</li>
<li><strong>dist</strong> the directory containing releases of r.js</li>
<li><strong>build</strong>: The files that make up the optimizer. dist.js includes a list of
the files from this directory to build into r.js.</li>
<li><strong>lib</strong>: The Java libraries for Rhino and Closure Compiler. Only needed if using
Java/Rhino to run r.js</li>
<li><strong>tests</strong>: command line tests. Run it under Node and Rhino by doing ../r.js all.js</li>
</ul>

<p>dist.js takes the build/jslib/x.js file and injects the require.js files and other
files from the build/jslib directory into it.</p>

<p>If you make changes to any of those files, you will need to run <strong>node dist.js</strong>
to generate a new r.js. Be sure to run it through the tests , using both Node
and Java/Rhino:</p>

<pre><code>* node dist.js
* cd tests
* node ../r.js all.js
* java -classpath ../lib/rhino/js.jar:../lib/closure/compiler.jar org.mozilla.javascript.tools.shell.Main ../r.js all.js
* cd ../build/tests
* node ../../r.js all.js
* java -classpath ../../lib/rhino/js.jar:../../lib/closure/compiler.jar org.mozilla.javascript.tools.shell.Main ../../r.js all.js
</code></pre>

<p>For running tests, put xpcshell in env/xpcshell/ as a directory, that contains
all the files needed for it to run, including the xpcshell binary. Downloading
<a href="http://ftp.mozilla.org/pub/mozilla.org/xulrunner/nightly/latest-mozilla-central/">a xulrunner nightly</a>
might work.</p>

<h1><a id="user-content-contributing-code-changes" class="anchor" href="#contributing-code-changes" aria-hidden="true"><span class="octicon octicon-link"></span></a>Contributing code changes</h1>

<p>See the <a href="http://requirejs.org/docs/contributing.html">RequireJS Contributing</a>
page for info on how to contribute code/bug fixes to this project.</p>

<p>Use GitHub pull requests to point to code changes, although for larger changes,
contact the <a href="http://groups.google.com/group/requirejs">requirejs mailing list</a>
to discuss them first.</p>

<h1><a id="user-content-included-libraries" class="anchor" href="#included-libraries" aria-hidden="true"><span class="octicon octicon-link"></span></a>Included libraries</h1>

<p>r.js includes modules from these projects:</p>

<ul>
<li><a href="http://esprima.org/">Esprima</a></li>
<li><a href="https://github.com/mishoo/UglifyJS">UglifyJS</a></li>
</ul>

<h1><a id="user-content-doing-a-release" class="anchor" href="#doing-a-release" aria-hidden="true"><span class="octicon octicon-link"></span></a>Doing a release</h1>

<p>To do a release of version 0.0.0:</p>

<ul>
<li>Make sure the right version of require.js is in the project.</li>
<li>Modify build/jslib/x.js to update the r.js version number in two places.</li>
<li>node dist.js</li>
<li>Run the tests (see above). They should pass. :)</li>
<li>mv r.js dist/r.js</li>
<li>git commit -am "Release 0.0.0"</li>
<li>git tag -am "Release 0.0.0" 0.0.0</li>
<li>git push origin master</li>
<li>git push --tags</li>
</ul>

<p>Update the RequireJS download site to point to the latest release, then update
the <a href="https://github.com/requirejs/requirejs-npm">requirejs/requirejs-npm</a> repo to have the latest
changes and publish the result to npm.</p>

<p>Make sure to keep <code>#!/usr/bin/env node</code> as the first line in bin/r.js in
the requirejs-npm repo.</p>
</article>
  </div>


        </div>

      </div><!-- /.repo-container -->
      <div class="modal-backdrop"></div>
    </div><!-- /.container -->
  </div><!-- /.site -->


    </div><!-- /.wrapper -->

      <div class="container">
  <div class="site-footer" role="contentinfo">
    <ul class="site-footer-links right">
        <li><a href="https://status.github.com/" data-ga-click="Footer, go to status, text:status">Status</a></li>
      <li><a href="https://developer.github.com" data-ga-click="Footer, go to api, text:api">API</a></li>
      <li><a href="https://training.github.com" data-ga-click="Footer, go to training, text:training">Training</a></li>
      <li><a href="https://shop.github.com" data-ga-click="Footer, go to shop, text:shop">Shop</a></li>
        <li><a href="https://github.com/blog" data-ga-click="Footer, go to blog, text:blog">Blog</a></li>
        <li><a href="https://github.com/about" data-ga-click="Footer, go to about, text:about">About</a></li>
        <li><a href="https://help.github.com" data-ga-click="Footer, go to help, text:help">Help</a></li>

    </ul>

    <a href="https://github.com" aria-label="Homepage">
      <span class="mega-octicon octicon-mark-github" title="GitHub"></span>
</a>
    <ul class="site-footer-links">
      <li>&copy; 2015 <span title="0.07546s from github-fe140-cp1-prd.iad.github.net">GitHub</span>, Inc.</li>
        <li><a href="https://github.com/site/terms" data-ga-click="Footer, go to terms, text:terms">Terms</a></li>
        <li><a href="https://github.com/site/privacy" data-ga-click="Footer, go to privacy, text:privacy">Privacy</a></li>
        <li><a href="https://github.com/security" data-ga-click="Footer, go to security, text:security">Security</a></li>
        <li><a href="https://github.com/contact" data-ga-click="Footer, go to contact, text:contact">Contact</a></li>
    </ul>
  </div>
</div>


    <div class="fullscreen-overlay js-fullscreen-overlay" id="fullscreen_overlay">
  <div class="fullscreen-container js-suggester-container">
    <div class="textarea-wrap">
      <textarea name="fullscreen-contents" id="fullscreen-contents" class="fullscreen-contents js-fullscreen-contents" placeholder=""></textarea>
      <div class="suggester-container">
        <div class="suggester fullscreen-suggester js-suggester js-navigation-container"></div>
      </div>
    </div>
  </div>
  <div class="fullscreen-sidebar">
    <a href="#" class="exit-fullscreen js-exit-fullscreen tooltipped tooltipped-w" aria-label="Exit Zen Mode">
      <span class="mega-octicon octicon-screen-normal"></span>
    </a>
    <a href="#" class="theme-switcher js-theme-switcher tooltipped tooltipped-w"
      aria-label="Switch themes">
      <span class="octicon octicon-color-mode"></span>
    </a>
  </div>
</div>



    
    

    <div id="ajax-error-message" class="flash flash-error">
      <span class="octicon octicon-alert"></span>
      <a href="#" class="octicon octicon-x flash-close js-ajax-error-dismiss" aria-label="Dismiss error"></a>
      Something went wrong with that request. Please try again.
    </div>


      <script crossorigin="anonymous" src="https://assets-cdn.github.com/assets/frameworks-3241a40a58a82e21daef3dd3cdca01bde189158793c1b6f9193fff2b5293cd1d.js"></script>
      <script async="async" crossorigin="anonymous" src="https://assets-cdn.github.com/assets/github/index-d3ef45e52a74e2511c31a0051d5dfd10b60b12a8b8a738ead962c35e11dbcc1f.js"></script>
      
      
  </body>
</html>

