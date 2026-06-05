Let $f:\{ -1,1 \}^{n}\to \mathbb{R}$ be a function on the $p$-[[Analysis of Boolean Functions/Biased Cube]]
Then define
$$
D_{i}f(x) = \frac{\sigma}{2} (f(x_{i\to 1}) - f(x_{i\to-1}))
$$

### Lemma
$$
D_{i}\phi_{A}(x) = \begin{cases}
\phi_{A\setminus \{ i \}}  &  \text{if $i\in A$}\\
0 & \text{otherwise}
\end{cases}
$$
### Lemma
If $\hat{f}$ is the [[Analysis of Boolean Functions/Discrete Fourier Transform on the Biased Cube]], then:
$$
D_{i}f=\sum_{A\ni i} \hat{f}(A)\phi_{A\setminus \{ i \}}
$$
### Lemma
Let $E_{i}f$ be defined as
$$
E_{i}f(x) = qf(x_{i\to 1}) + pf(x_{i\to-1})
$$
Then
$$
f=E_{i}f + \phi_{i}D_{i}f
$$
and $E_{i}f$ and $\phi_{i}D_{i}f$ are orthogonal.
#### Proof
$$
f(x)-E_{i}f = \begin{cases}
p(f(x_{i\to 1})- f(x_{i\to-1})) & \text{if }x_{i}=1 \\
-q(f(x_{i\to 1})-f(x_{i\to-1})) & \text{if }x_{i}=-1
\end{cases}
$$
Also
$$
\phi_{i}(x) = \begin{cases}
\frac{2p}{\sigma}  & \text{if }x_{i}=1 \\
-\frac{2q}{\sigma}  & \text{if }x_{i}=-1
\end{cases}
$$
Therefore
$$
f(x)-E_{i}f(x) = \phi_{i}D_{i}f(x)
$$
For orthogonality, note that $\mathop{\mathbb{E}}\phi_{i}=0$ 
and $E_{i}f$ and $D_{i}f$ don't depend on $x_{i}$. 
So by conditioning on everything except $x_{i}$ we find 
$$
\braket{ E_{i}f | \phi_{i}D_{i}f } =\mathop{\Large\mathbb{E}}\limits_{x\sim \mu_{p}} E_{i}f(x) \phi_{i}(x) D_{i}f(x) = 0
$$

