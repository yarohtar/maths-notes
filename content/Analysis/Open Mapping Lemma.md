Let $X$ and $Y$ be [[Analysis/Normed Space]] with $X$ [[Analysis/Complete]].
Let $T\in L(X,Y)$ be a [[Analysis/Linear Operator]].
Suppose $B_{Y}\subseteq\overline{T(B_{X})}$.
Then for all $y\in Y$ and any fixed $\epsilon>0$
there is some $x \in X$ with $Tx=y$ and $\lVert x \rVert\leq (1+\epsilon)\lVert y \rVert$ for any fixed $\epsilon>0$.
In particular, $T$ is surjective.

Furthermore, $Y$ is [[Analysis/Complete]].

#### Proof
Given $y\in Y$, $\lVert y \rVert=1$, seek $x \in X$ with $Tx=y$ and $\lVert x \rVert<2$ 
(we took $\epsilon=1$ but proof is the same for any $\epsilon>0$)
We know $T(B_{X})$ dense in $B_{Y}$, 
so there is some $x$ in $X$ with $\lVert y-Tx \rVert\leq \frac{1}{2}$.
Also $T\left( \frac{1}{2}B_{X} \right)$ is dense in $\frac{1}{2}B_{Y}$, 
so there is some $x_{2}$ in $X$ with $\lVert x_{2} \rVert< \frac{1}{2}$ with $\lVert y-Tx_{1}-Tx_{2} \rVert\leq \frac{1}{4}$.
Continue obtaining $x_{n}$.
Put $x=\sum x_{n}$ which converges as its a [[Analysis/Cauchy Sequence]].

Then $\lVert x \rVert\leq \sum \lVert x_{n} \rVert\leq 2$ and $\lVert y-Tx \rVert=0$ so $Tx=y$

Now we prove $Y$ is [[Analysis/Complete]].
Given $(y_{n})$ Cauchy in $Y$ 
WLOG $\lVert y_{n}-y_{n-1} \rVert\leq 2^{-n}$ for all $n$
For each $n>2$, choose $x_{n}\in X$ with $\lVert x_{n} \rVert \leq 2^{-n+1}$ with $Tx_{n}=y_{n}-y_{n-1}$
Also choose $x_{1}\in X$ with $Tx_{1}=y_{1}$

Thus $T(x_{1}+\dots+x_{n})=y_{n}$

Let $x=\sum x_{n}$ (Converges as its a [[Analysis/Cauchy Sequence]])

Then 
$$
Tx=\lim_{ n \to \infty }T(x_{1}+\dots+x_{n})=\lim_{ n \to \infty }y_{n}
$$
so $(y_{n})$ is convergent,
so $Y$ is [[Analysis/Complete]].
