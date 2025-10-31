$X$, $Y$ [[Analysis/Normed Space]] with $Y$ [[Analysis/Complete]]. 
Then $L(X,Y)$ is [[Analysis/Complete]].
#### Proof
Given $(T_{n})$, a [[Analysis/Cauchy Sequence]] in $L(X,Y)$:
Have $(T_{n}x)$ Cauchy in $Y$ for all $x\in X$ - since $\lVert T_{m}x-T_{n} x\rVert\leq \lVert T_{m}-T_{n} \rVert\lVert x \rVert$ so $T_{n}x\to T(x)$ for some $T(x)\in Y$.
$T$ is linear by linearity of $T_{n}$ and taking pointwise limits.
$T$ bounded: Given $\epsilon>0$, $\lVert T_{m}-T_{n} \rVert\leq \epsilon$ for all $m,n>n_{0}$ for some $n_{0}$.
so $\lVert T_{m}x-T_{n}x \rVert\leq \epsilon \lVert x \rVert$
Let $n\to \infty$: $\lVert T_{m}x-Tx \rVert\leq \epsilon\lVert x \rVert$
Hence $\lVert Tx \rVert\leq \epsilon \lVert x \rVert+\lVert T_{m}x \rVert\leq(\epsilon+\lVert T_{m} \rVert)\lVert x \rVert$

Note that $\lVert T_{m}-T \rVert\leq \epsilon$ for all $m\geq n_{0}$ so $T_{m}\to T$. (???)