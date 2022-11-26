# Color

- [Main Readme](./README.md)

A simple library to let you manipulate colors

## Functions an how to us them

### Make a color

```typescript
import { Color } from '@codemylife/canvassm';
const red = new Color(255, 0, 0);
const green = new Color(0, 255, 0);
const blue = new Color(0, 0, 255);
const white_faded = new Color(255, 255, 255, 0.5);
```

### Add a color

```typescript
const red = new Color(255, 0, 0);
const green = new Color(0, 255, 0);
red.add(green);     //255,255,0
```
## Maximize a color
```typescript
const color = new Color(200,100,50);
color.maximize();   //255,0,0
```

## Minimize a color
```typescript
const color = new Color(200,100,50);
color.minimize();   //0,0,255
```

## Compliment a color
```typescript
const color = new Color(255,255,255);
const rev = color.compliment();     //0,0,0
```
