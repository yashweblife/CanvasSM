# CanvasSM

This is a very basic library to help you use the html canvas element.

## Code examples

### Creating a canvas

```javascript
import { Canvas } from 'canvassm';
const canvas = new Canvas(); //Automatically adds to the document body
```

### Add to custom element

```javascript
import { Canvas } from 'canvassm';
const canvas = new Canvas(document.querySlector('#id'));
```

### Setting Size

```javascript
import {Canvas, Vector} from 'canvassm'
const canvas = new Canvas()
canvas.setSize(new Vector(100, 100));
```

### Draw Circle

```typescript
import {Vector, CircleInterface} from 'canvassm'
const c:CircleInterface = {
    pos:new Vector(100,100),
    size:100,
    fill:true,
    stroke:false,
    fillColor:"red"
}
canvas.circle(c)
```

```typescript
import {Vector, LineInterface} from 'canvassm'
const l:LineInterface = {
    start:new Vector(0,0),
    end:new Vector(100,100),
    color:"black",
    size:2
}
```