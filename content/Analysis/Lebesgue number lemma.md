Let $M$ be a sequentially compact metric space with open cover $\mathcal U$.
We can find a $\delta>0$ s.t. for any $a\in M$ there is a $G\in\mathcal U$ s.t. $B_\delta(a)\subseteq G$.
#### Proof
Suppose there is no such $\delta>0$. 
For any $\delta=\frac 1 n$ find $a_n\in M$ s.t. there is no $G\in\mathcal U$ s.t. $B_\delta(a_n)\subseteq G$. 
As $M$ is sequentially compact, 
find a convergent subsequence $(a_n)_{n\in N}$ where $N\subseteq\mathbb N$. 
Suppose it converges to $a$. 
Then we find an open $G\in U$ which contains $a$.
Hence, there is an open ball $B_\epsilon(a)\subseteq G$ for $\epsilon>0$. 
But for large enough $n$, certainly $B_{1/n}(a_n)\subseteq B_\epsilon(a)\subseteq G$ which is a contradiction. 