Let $P$ and $Q$ be two distributions 
on the same discrete alphabet $A$.
The relative entropy $D(P||Q)$ is:
$$
D(P||Q)=\sum_{x\in A} P(x) \log \frac{ P(x) }{ Q(x) }
$$
Additionally, we define
$$
\begin{align}
D_{e}(P||Q)  & = \sum_{x\in A} P(x) \log_{e} \frac{ P(x) }{ Q(x) }  \\
 & = (\log_{e}2) D(P||Q)
\end{align}
$$
### Lemma
For any $P$ and $Q$ we have 
$$
D(P||Q)\geq 0
$$
with 
$$
D(P||Q)=0\iff P=Q
$$
#### Proof
Using [[Information Theory/Log-Sum Inequality]]:
$$
\sum_{x\in A} P(x) \log \frac{P(x)}{Q(x)} \geq 0
$$
with equality if and only if $\frac{P(x)}{Q(x)}=\text{const}$.
But then this constant has to be $1$.