---
layout: post
title: Inject custom Netscaler logon page items using rewrite feature
category: web
comments: true

---

This post features a small tweak which I discovered following a link on one of Carl Stalhood's awesome guides. However, I thought putting the content of some posts as well as my own research together
might help some of you getting things in place more quickly.

## Enable Rewrite feature

{% gist 043817b9d4d5f2bc20d88bc62d9d6aa2 %}

## Create Rewrite Action

```shell
add rewrite action rw_act_insert_belowloginbtn insert_after_all "HTTP.RES.BODY(120000).SET_TEXT_MODE(IGNORECASE)" q{"var login_below_btn=$(\"<div style='text-align:center;margin-left:167px;padding-top: 60px;font-size:12px'><a href='https://yourlink.html' target='_blank'>My Link</a></div>\").appendTo(logonbox_logonform);"} -pattern "logonbox_logonform.append(box_view);"
```

## Create Rewrite Policy

```shell
add rewrite policy rw_pol_insert_belowloginbtn "HTTP.REQ.URL.CONTAINS(\"gateway_login_view.js\")" rw_act_insert_belowloginbtn
```

## Bind Rewrite Policy to your vServer

In Netscaler web interface, navigate to __Netscaler Gateway > Virtual Servers > MyVirtualServer__.  
Add a rewrite Policy and choose the previously created Policy to bind to the vServer.  
Make sure, that you bind the policy with type __Response__.

## Pay attention to Cache Policies

Netscaler gateway vserver wizards automatically adds some cache policies, that may prevent the rewrite policy from being applied.

If "_cacheVPNStaticObjects" cache policy is bount to your vServer, edit it and change CACHE to NOCACHE

## References

Original Post [Netscaler 11 Theme Customization - How to Add Links and Verbiage](https://discussions.citrix.com/topic/371942-netscaler-11-theme-customization-how-to-add-links-and-verbiage/)
