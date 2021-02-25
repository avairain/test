
## 使用
```tsx
  import { Button } from '...'

```


## 全局风格
```tsx
  import { CurrentProvider } from '...'
  <CurrentProvider value={{ theme: 'light' || 'dark' }}> RootNode </CurrentProvider>

```

## 国际化
```tsx
import { CurrentProvider } from '...'
  <CurrentProvider value={{ theme: 'light' || 'dark' }} locale={'zh-cn' | 'en' | { a: 'a' }}> RootNode </CurrentProvider>

```

