---
id: web-interview-html
title: HTML
---

### 1. What does a DOCTYPE do?

<details>
<summary markdown="span">Answer</summary>
<p>
DOCTYPE is an abbreviation for Document Type. A DOCTYPE is always associated to a DTD - for Document Type Definition.

A DTD defines how documents of a certain type should be structured (i.e. a button can contain a span but not a div), whereas a DOCTYPE declares what DTD a document supposedly respects (i.e. this document respects the HTML DTD).

For webpages, the DOCTYPE declaration is required. It is used to tell user agents what version of the HTML specifications your document respects. Once a user agent has recognized a correct DOCTYPE, it will trigger the no-quirks mode matching this DOCTYPE for reading the document. If a user agent doesn't recognize a correct DOCTYPE, it will trigger the quirks mode.

The DOCTYPE declaration for the HTML5 standards is `<!DOCTYPE html>`.

</p>
</details>

### 2. How do you serve a page with content in multiple languages?

<details>
<summary markdown="span">Answer</summary>
<p>
I will assume that it is asking about the most common case, which is how to serve a page with content available in multiple languages, but the content within the page should be displayed only in one consistent language.

When an HTTP request is made to a server, the requesting user agent usually sends information about language preferences, such as in the Accept-Language header. The server can then use this information to return a version of the document in the appropriate language if such an alternative is available. The returned HTML document should also declare the lang attribute in the `<html>` tag, such as `<html lang="en">...</html>`.

Of course this is useless for letting a search engine know that the same content is available in different languages, and so you must also make use of the hreflang attribute in the `<head>`. Eg. `<link rel="alternate" hreflang="de" href="http://de.example.com/page.html" />`

In the back end, the HTML markup will contain i18n placeholders and content for the specific language stored in YML or JSON formats. The server then dynamically generates the HTML page with content in that particular language, usually with the help of a back end framework.

</p>
</details>
