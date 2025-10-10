For $X$ and $Y$ [[Notes/Normed Space]] with $X$ complete and $T\in L(X,Y)$, suppose $B_{Y}\subseteq\overline{T(B_{X})}$.
Then:
1. For all $y\in Y$, there is some $x \in X$ with $Tx=y$, $\lVert x \rVert\leq (1+\epsilon)\lVert y \rVert$ for any fixed $\epsilon>0$ (so $T$ is surjective)
2. $Y$ is complete

#### Proof
1. Given $y\in Y$, $\lVert y \rVert=1$, seek $x \in X$ with $Tx=y$ and $\lVert x \rVert<2$
Know $T(B_{X})$ dense in $B_{Y}$, so there is some $x$ in $X$ with $\lVert y-Tx \rVert\leq \frac{1}{2}$.
Also $T\left( \frac{1}{2}B_{X} \right)$ dense in $\frac{1}{2}B_{Y}$, so there is some $x_{2}$ in $X$ with $\lVert x_{2} \rVert< \frac{1}{2}$ with $\lVert y-Tx_{1}-Tx_{2} \rVert\leq \frac{1}{4}$.
Continue obtaining $x_{n}$.
Put $x=\sum x_{n}$ which converges as its Cauchy.

Then $\lVert x \rVert\leq \sum \lVert x_{n} \rVert\leq 2$ and $\lVert y-Tx \rVert=0$ so $Tx=y$

2. Given $(y_{n})$ Cauchy in $Y$: WLOG $\lVert y_{n}-y_{n-1} \rVert\leq 2^{-k}$ for all $n$ (.. a sub)
For each $n>2$, choose $x_{n}\in X$ with $\lVert x_{n} \rVert \leq 2^{-n+1}$ with $Tx_{n}=y_{n}-y_{n-1}$
Also choose $x_{1}\in X$ with $Tx_{1}=y_{1}$

Thus $T(x_{1}+\dots+x_{n})=y_{n}$

Let $x=\sum x_{n}$ (Converges as Cauchy)

Then $Tx=\lim_{ n \to \infty }T(x_{1}+\dots+x_{n})=\lim_{ n \to \infty }y_{n}$ so $(y_{n})$ convergent.