[[Information Theory/Relative Entropy]] and [[Information Theory/Total Variation Distance]] satisfy:
$$
D_{e}(P||Q) \geq \frac{1}{2} \lVert P-Q \rVert ^{2}_{TV}
$$
### Proof
First suppose $P$ and $Q$ are both Bernoulli with probabilities $p$ and $q$ respectively.
WLOG assume $0\leq q\leq p\leq 1$ (if not, then swap $q\to 1-q$ and $p\to 1-p$)
Let 
$$
\Delta(p,q) = D_{e}(P||Q) - \frac{1}{2} \lVert P-Q \rVert^{2}_{TV}
$$
Fix $p$ and consider all $0\leq q\leq p$.
Since $\Delta(p,p)=0$, it suffices to show
$$
\frac{ \partial \Delta }{ \partial q } \leq 0
$$
for all $q\in[0,p]$.
$$
\begin{align}
\frac{ \partial \Delta(p,q) }{ \partial q }  & =\frac{ \partial }{ \partial q } \left( p\log_{e} \frac{ p }{ q } + (1-p) \log_{e}\frac{ 1-p }{ 1-q } - \frac{1}{2} (2(p-q))^{2} \right)  \\
 & = - \frac{p}{q} + (1-p) \frac{ 1 }{ 1-q } + 4(p-q)  \\
 & = (p-q) \left( 4 - \frac{1}{q(1-q)} \right) \\
 & \leq 0
\end{align}
$$
Now in the general case 
Let $B=\{ x\in A: P(x) \geq Q(x) \}$ and consider $f=1_{B}$.
Then $P_{f(X)}\sim \mathrm{Bern}(p)$ and $Q_{f(X)}\sim \mathrm{Bern}(q)$.
where $p=P(B)$ and $q=Q(B)$.
Then by the binary case
$$
D_{e}(P_{f(X)}||Q_{f(X)}) \geq \frac{1}{2} \lVert P_{f(X)}-Q_{f(X)} \rVert ^{2}_{TV}
$$
Now apply [[Information Theory/Data Processing Property of the Relative Entropy]] and note
$$
\frac{1}{2} \lVert P_{f(X)} -Q_{f(X)} \rVert^{2}_{TV} = \frac{1}{2}(2(P(B)-Q(B)))^{2} = \frac{1}{2} \lVert P-Q \rVert^{2}_{TV}
$$
to find
$$
D_{e}(P||Q) \geq \frac{1}{2} \lVert P-Q \rVert ^{2}_{TV}
$$

