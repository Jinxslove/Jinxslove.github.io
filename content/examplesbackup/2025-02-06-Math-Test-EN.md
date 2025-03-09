+++
title = 'Math Test'
date = 2025-02-06T19:33:00+08:00
lastmodified = ""
author = ""
authorList = ""
license = "CC BY-NC-SA 4.0"
license_url = "https://creativecommons.org/licenses/by-nc-sa/4.0/"
cover = "/assets/imgs/hero.webp"
math = true
draft = false
+++

This is an example article showcasing mathematical formulas, including inline formulas and standalone formula blocks.

Since Markdown uses escape characters like ```\```, which can cause conflicts and lead to rendering errors in formulas, we replace ```\\(...\\)``` with ```$...$```, ```\\[...\\]``` with ```$$...$$```, and manually change the matrix line break symbol from ```\\``` to ```\\\\```.

Here are some configurations for MathJax.js:

```javascript
MathJax = {
  tex: {
    inlineMath: [['$', '$'], ['\\(', '\\)']],
    displayMath: [['$$', '$$'], ['\\[', '\\]']]
  },
  svg: {
    fontCache: 'global'
  },
  options: {
    enableMenu: false
  }
};
```

## Inline Formulas

Einstein's mass-energy equation: $E = mc^2$, Pythagorean theorem: $a^2 + b^2 = c^2$

```latex
$E = mc^2$
$a^2 + b^2 = c^2$
```

## Fractions and Integrals

Standalone formula block example:

$$
\int_{-\infty}^\infty e^{-x^2} dx = \sqrt{\pi}
$$

```latex
$$
\int_{-\infty}^\infty e^{-x^2} dx = \sqrt{\pi}
$$
```

Fraction demonstration:

$$
\frac{\partial f}{\partial t} = \frac{\partial^2 f}{\partial x^2}
$$

```latex
$$
\frac{\partial f}{\partial t} = \frac{\partial^2 f}{\partial x^2}
$$
```

## Matrices and Equation Systems

Matrix representation:

$$
\begin{bmatrix}
1 & 2 \\\\
3 & 4
\end{bmatrix}
$$

```latex
$$
\begin{bmatrix}
1 & 2 \\\\
3 & 4
\end{bmatrix}
$$
```

Simultaneous equations:

$$
\begin{cases}
2x + y = 7 \\\\
3x - 2y = 4
\end{cases}
$$

```latex
$$
\begin{cases}
2x + y = 7 \\\\
3x - 2y = 4
\end{cases}
$$
```

## Greek Letters and Symbols

Common symbols: $\alpha, \beta, \gamma$, $\Rightarrow$, $\forall x \in \mathbb{R}$

```latex
$\alpha, \beta, \gamma$, $\Rightarrow$, $\forall x \in \mathbb{R}$
```

## Binomial Theorem

$$
(a + b)^n = \sum_{k=0}^n \binom{n}{k} a^{n-k}b^k
$$

```latex
$$
(a + b)^n = \sum_{k=0}^n \binom{n}{k} a^{n-k}b^k
$$
```

## Chemical Equations

$$
\ce{CO2 + C -> 2CO}
$$

```latex
$$
\ce{CO2 + C -> 2CO}
$$
```