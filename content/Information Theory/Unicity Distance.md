Let $(\mathcal{M},\mathcal{K},\mathcal{E})$ be a [[Information Theory/Cryptosystem]].
Let $M$ and $K$ be random variables taking values in 
finite $\mathcal{M}$ and $\mathcal{K}$
Let $C=e(M,K)$
The unicity distance $U$ is the least $n>0$ such that 
$$
H(K|C^{(n)})=0
$$
(i.e. given $n$ encrypted messages, we can find $K$)
If $n$ doesn't exist, then $U=\infty$
Now:
$$
\begin{align}
H(K|C^{(n)}) &=H(K,C^{(n)}) -H(C^{(n)}) \\
 & = H(K,M^{(n)},C^{(n)}) - H(C^{(n)}) \\
 & =H(K,M^{(n)})-H(C^{(n)}) \\
 & =H(K)+H(M^{(n)}) -H(C^{(n)})
\end{align}
$$
Assume:
1. all keys are equally likely, so $H(K)=\log \lvert K \rvert$
2. $H(M^{(n)})=nH$ where $H=H(M)$ (i.e. msgs are independent)
3. All ciphertext is equally likely so $H(C^{(n)})=n\log \lvert \Sigma \rvert$

So we get:
$$
H(K|C^{(n)})=\log \lvert K \rvert +nH-n\log \lvert \Sigma \rvert 
$$
and:
$$
U=\frac{\log \lvert K \rvert }{\log \lvert \Sigma \rvert -H}
$$
