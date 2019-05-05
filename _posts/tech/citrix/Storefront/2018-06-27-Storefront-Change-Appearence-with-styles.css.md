---
layout: post
title: StoreFront 3.15 css classes for changing Appearence 
category: web
comments: true

---

Making changes to the look & feel of storefront is a common task I face in my projects. So I thought having an overview of the most commonly used classes is a good thing to get some basic orientation. Here is what I gathered, yet.

## Storefront Receiver for Web Classes

Class | Properties
------|-----------
.logo-container | Image displayed on the top left
.largeTiles .store-toolbar <br/> .toolbar | Top Toolbar with category navigation and search window
.theme-highlight-color <br/> .theme-highlight-hover-color:hover | Highlighting for Category selection
.appBundle9 <br/> .bundleDetail.appBundle9 <br/> .appBundle1 <br/> .bundleDetail.appBundle1 <br/> .smallTiles .applicationBundleContainer <br/> .largeTiles .applicationBundleContainer | Application bundle containers
.theme-header-color <br/>.theme-header-bgcolor | theme header

## Logon Page Classes

Make use of the following Classes for Storefront Logon Page customizations:

Class | Description
------|------------
.web-screen | Logon Page Background
.logon-logo-container | Logon Page Logo
.web-screen .content-area | Content Area
.button.default | Logon Button
.credentialform .plain | Credential Form
.web-screen .main-text | Text Formatting for Logon Page
.credentialform input[type=text], .credentialform input[type=password], .credentialform .pseudo-input | Logon Form Text Boxes
.web-screen .detail-text | Logon Screen notification text
.credentialform .standaloneText | Notifications inside credential forms
.customAuthBottom | Custom text below Logon Form

## Loading Screen

```css
.loading-logo {
    background-image: url(./yourlogo.png);
    background-size: 100%;
    width: 250px;
    height: 30px;
    padding-bottom: 10px;
    background-repeat: no-repeat
}

.loading-screen {
    background-color: #FFFFFF;
    }
```

## Footer

```css
.customAuthFooter {
    font-size: 14px;
    color: #323737;
    text-align: center;
}
```