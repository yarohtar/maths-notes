Let $f_n:\mathbb{R}\rightarrow \mathbb{R}$ and $f:\mathbb{R}\rightarrow \mathbb{R}$. We say that $f_n\rightarrow f$ pointwise if for all $x\in \mathbb{R}$:
$$f_n(x)\rightarrow f(x)\text{ as }n\rightarrow\infty$$.

## It does not preserve nice properties
### Example 1
All $f_n$ CTS, but $f$ not CTS
$f_n=nx$ for $x\leq\frac 1 n$, $f_n(x)=1$ otherwise
$f(x)=1$ for $x>0$, but $f(0)=0$
### Example 2
All $f_n$ integrable, but $f$ not integrable.
Take $f(x)=1$ for $x\in Q$, $f(x)=0$ otherwise.
Enumerate rational numbers in $[0,1]$ as $q_1,q_2,\dots$ and set $f_n(x)=1$ for $x=q_1\dots q_n$, otherwise set $f_n(x)=0$.
### Example 3
All $f_n$ integrable, $f$ integrable, but $\int_0^1f_n\not\rightarrow \int_0^1f$
Take $f(x)=0$ and $f_n(x)=n$ for $0<x<\frac 1 n$, $f_n(x)=0$ otherwise.