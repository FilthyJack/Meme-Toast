MemeToast

> Meme-Toast is a lightweight library Toasts, which can be used with any UI Framework/design.

## Features

* Very lightweight with none internal dependencies
* Can be used with any exisiting Application built on any framework



## Quick start


### 1 Install via npm

```bash
npm install meme-toast
```

### 2 Import and use Meme-Toast
```javascript
import memeToast from "meme-toast";


```

### 3 Include Styles

```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/FilthyJack/Meme-Toast/style.css">
```
## Documentation

After Importing, to use a toast -> 
memeToast.toaster({
            position: "bottom",
            message: 'The string you want to display',
            duration: '4000',
            type: 'danger'
});

Any Toast will dissapear on Click.

1. The 'position' is a string and has 4 options -> bottom/top/top-right/top-left
2. The 'message' is the string you want display in your toast
3. The 'duration' is time in milliseconds you want the Toast to show, can provide another option 
    'infinite' for a Toast that persists indefinetly.
4. The 'type' is for the type of Toast you want, options are danger/success/warning/message. The 
    colors of toasts depend on this.

## Browser support

Recent versions of Firefox, Chrome, Edge, Opera and Safari. IE10+ is only partially supported.



## Core Team

<table>
  <tr>
    <td align="center"><a href="https://www.linkedin.com/in/ashim-khan"><img src="https://github.com/sheen07ashim/Portfolio/blob/main/src/assets/potrait1.jpg" width="80px;" alt=""/><br /><sub><b>Ashim Khan</b></sub></a><br /></td>
  </tr>
</table>

