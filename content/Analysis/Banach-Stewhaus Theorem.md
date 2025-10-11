Let $X$ be [[Analysis/Banach Space]] and $Y$ [[XNotes/Normed Space]].
$T_{1},T_{2},\dots \in L(X,Y)$ st $T_{n}(x)\to T(x)$ for some $T:X\to Y$.
Then $T$ is a continuous linear map.
#### Proof
##### $T$ Linear:
$\forall n:T_{n}(\lambda x+\mu y)=\lambda T_{n}(x)+\mu T_{n}(y)$ so by taking the limit $T$ is linear.
##### $T$ continuous:
$T_{n}$ are pointwise bounded
And hence the $T_{n}$ are bounded [[XNotes/Principle of Uniform Boundedness]]
But now
$$
\forall x\in X:\lVert T_{n}x \rVert \leq \lVert T \rVert \lVert x \rVert \leq M\lVert x \rVert 
$$
Let $n\to \infty$ so $\lVert Tx \rVert\leq M\lVert x \rVert$
