For a metric space $M$, the following are equivalent:
1. $M$ is [[Notes/Compactness\|compact]]
2. $M$ is [[Notes/Sequential compactness\|sequentially compact]]
3. $M$ is [[Notes/Totally bounded\|totally bounded]] and [[Notes/Complete Metric Space\|complete]]

## Proof
$(1\implies 2):$ Suppose $M$ is compact. Suppose it is not sequentially compact. Find a sequence $(x_n)$ which doesn't have a convergent subsequence. Suppose that there is some $x\in M$ s.t. every nbd $U$ of $x$ has infinitely many points of the sequence. Now there must be a subsequence of $(x_n)$ converging to $x$ - contradiction. Hence, for every $x\in M$ find open nbd $U_x$ of $x$ which contains at most finitely many points in the sequence. Then $U_x$ are an open cover of $M$. But $M$ is compact, so find finite $F\subseteq M$ s.t. $\bigcup_{x\in F}U_x=M$. Hence, this union contains at most finitely many points of the sequence, but there are infinitely many of them in $M$ - contradiction.
$(2\implies 3):$ Suppose $M$ is sequentially compact. Take any Cauchy sequence. It has a convergent subsequence. But that convergent subsequence will bind our Cauchy sequence, so the Cauchy sequence converges, hence $M$ is complete.
Now suppose $M$ is not totally bounded. Find an $\epsilon$ s.t. every $\epsilon$-net is infinite. Pick any point $x_0\in M$ and keep picking $x_{n+1}\not\in\bigcup_{k=1}^nB_\epsilon(x_k)$ (always possible because finitely many points can't cover $M$). Now find a convergent subsequence of this - but the sequence is not Cauchy! And a convergent sequence is always Cauchy! Contradiction.
$(3\implies 2):$ Suppose $M$ is totally bounded and complete. Pick a sequence $(x_n)$ in $M$. Let $N_0=\mathbb N$. For any $k\in\mathbb N$ let $\epsilon=1/k$ and find a finite $\epsilon$-net. One of the balls in it will contain infinitely many terms of the sequence $(x_n)_{n\in N_{k-1}}$, so let $N_k\subseteq N_{k-1}\setminus\{\min N_{k-1}\}$ be this infinite set contained in this ball.
Hence define $n_k=\min N_k$. Then the sequence $(x_{n_k})_{k\in\mathbb N}$ is Cauchy (for any $\epsilon>0$, the sequence $(x_{n_k})_{k>1/\epsilon}$ is contained in a ball of radius $\epsilon$) hence convergent. 
$(2\implies 1):$ Suppose $M$ is sequentially compact. Because of $(2\implies 3)$ we have already proved that $M$ is totally bounded and complete. Let $\mathcal U$ be an open cover of $M$.
[[Notes/Lebesgue number lemma]]

Now take such a $\delta>0$. Find a finite $\delta$-net. By definition of $\delta$, find $B_\delta(a_i)\subseteq G_i\in\mathcal U$ for each $a_i$ in the $\delta$-net. Then $G_i$ cover $M$.
Hence $M$ is compact.