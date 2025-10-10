### Definition
Let $X\subset \mathbb{R}$, $f_n:X\rightarrow \mathbb{R}$ and $f:X\rightarrow \mathbb{R}$. We say $(f_n)$ converges uniformly to $f$ if:
$$\forall\epsilon>0\ \exists N\ \forall x\in X\ \forall n\geq N |f_n(x)-f(x)|<\epsilon$$
We write $f_n\rightarrow f$ uniformly.

Note that if $f_n\rightarrow f$ pointwise:
$$\forall\epsilon>0\ \forall x\in X\ \exists N\in X\ \forall n\geq N |f_n(x)-f(x)|<\epsilon$$
So we just swapped two quantifiers. It is now easy to see that uniform implies pointwise.

Visually, all $f_n$ functions need to be in this $\epsilon$-neighbourhood of $f$: 

![[Excalidraw/Drawing 2023-10-12 00.42.27.excalidraw]]

### Theorem CTS
Suppose each $f_n$ is CTS and $f_n\rightarrow f$ uniformly. Then $f$ is CTS.

#### Proof
Let $x\in X$ and $\epsilon>0$. By uniform convergence, find $N$ s.t.
$$\forall y\in X\ \forall n\geq N\ |f_n(y)-f(y)|<\epsilon$$
In particular, 
$$\forall y\in X\ |f_N(y)-f(y)|<\epsilon$$
By continuity of $f_N$ at $x$, we can find $\delta>0$ s.t.
$$\forall y\in X\ |y-x|<\delta\implies |f_N(y)-f_N(x)|<\epsilon$$
Now let $y\in X$ s.t. $|y-x|<\delta$. Have 
$$
\begin{align*}
|f(y)-f(x)|\leq |f(y)-f_N(y)| + |f_N(y)-f_N(x)| + |f_N(x)-f(x)|<3\epsilon
\end{align*}
$$
Hence $f$ is CTS.

This is called a $3\epsilon$-proof.

### Theorem INT
Let the domain $X=[a,b]$. Suppose $f_n\rightarrow f$ uniformly and each $f_n$ is integrable. Then $f$ is also integrable and $\int_a^bf_n\rightarrow \int_a^bf$.
#### Proof
Take $n$ large enough so that $|f_n-f|<1$. Note that $f_n$ is bounded (by $M$). Hence $f$ is bounded by $M+1$.
Now for any dissection $D$, $U_D(f)$ and $L_D(f)$ are defined.
Pick $\epsilon>0$. Hence find $n$ big enough s.t. $|f_n-f|<\epsilon$ and find a dissection $D$ s.t. $|U_D(f_n)-L_D(f_n)|<\epsilon$. 
Furthermore, can find that $|U_D(f_n)-U_D(f)|<\epsilon/(b-a)$ and similar for $|L_D(f_n)-L_D(f)|<\epsilon/(b-a)$. Now use triangle inequality on $|U_D(f)-L_D(f)|$ to find a $3\epsilon$ proof.

Finally, have:
$$\left|\int_a^bf-f_n\right|\leq \int_a^b|f-f_n|<\epsilon(b-a)$$
Hence $\int_a^bf_n\to\int_a^bf$.


### Corollary
Suppose $f_n$ is a sequence of functions whose partial sums converge uniformly to $f$. Then:
$$\int_a^bf=\sum_{n=1}^\infty\int_a^bf_n$$
### Theorem Diff
Let $f_n:[a,b]\to\mathbb R$ be $C^1(a,b)$. Assume that the sequence of partial sums of $f_n'$ converges uniformly and that there is some $c\in[a,b]$ such that:
$$\sum_{n=1}^\infty f_n(c)$$
converges. Then the sequence of partial sums $f_n$ converges uniformly. Furthermore, the limit $f$ is $C^1(a,b)$ and:
$$f'(x)=\sum_{n=1}^\infty f_n'(x)$$
#### Proof sketch
Define $f(x)=\int_c^xf' + \sum_{n=1}^\infty f_n(c)$ where $f'$ is the uniform limit of partial sums of $f_n'$. Note that by FTA, $f$ is differentiable and it's derivative is $f'$. So we just need to prove that partial sums of $f_n$ converge uniformly to $f$. 
Let $\epsilon>0$. Find $N$ s.t. for any $n>N$ we have $|f'-\sum_{k=1}^n f_k'|<\epsilon$ AND $|\sum_{k=n+1}^\infty f_n(c)|<\epsilon$. By FTA we have $f_k(x)=\int_c^xf_k'+f_k(c)$. So:
$$
\begin{align} \\
|f(x)-\sum_{k=1}^nf_k(x)|&=\left|\int_c^x(f'-\sum_{k=1}^nf_k')+\sum_{k={n+1}}^\infty f_n(c)\right|\\
&\leq \int_c^x|f'-\sum_{k=1}^nf_k'|+|\sum_{k=n+1}^\infty f_n(c)| \\
&< |x-c|\epsilon +\epsilon \\
&\leq \epsilon(1+|a-b|) \\
\end{align}
$$