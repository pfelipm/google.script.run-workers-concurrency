# google.script.run workers concurrency test

The official docs for Google Apps Script state [this](https://developers.google.com/apps-script/guides/services/quotas):

<table><tbody><tr><td><strong>Feature</strong></td><td><strong>Consumer (e.g., gmail.com)</strong></td><td><strong>G Suite free edition (</strong><a href="https://support.google.com/a/answer/2855120"><strong>legacy</strong></a><strong>)</strong></td><td><strong>Basic / Gov</strong></td><td><strong>G Suite Business / Enterprise / Education</strong></td></tr><tr><td>Simultaneous executions</td><td>30</td><td>30</td><td>30</td><td>30</td></tr></tbody></table>

But, what does _simultaneous executions_ mean? In which possible situations does that limit apply? 🤔

1.  Apps Script functions consumed as an API.
2.  Event-triggered Apps Script functions.
3.  `doGet()` method when a user accesses a webapp.
4.  `google.script.run()` asynchronous invocation of server-side Apps Script functions.

Motivated by [this](https://twitter.com/LifeOfSpy/status/1326510264020328449) and [this](https://groups.google.com/g/google-apps-script-community/c/qUUGk6G1AnA/m/iKH8KBTiAgAJ), I've set up this test webapp to check which limits apply to **\[4\]**.

👉 [Live webapp](https://script.google.com/macros/s/AKfycbwktjIP4QQByrM81S_9PL-xYHYGEVua7CdOem9ax2VWQYEzQzng/exec) 👈

![https___script google com_macros_s_AKfycbzK6WAknP7iozcbLcVkBaBix02vJLgkqrZMGUd3Bx5a_dev](https://user-images.githubusercontent.com/12829262/99184137-3f1aa380-2741-11eb-831d-5891986eea46.gif)
