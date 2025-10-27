Suppose $\{ X_{n} \}$ are IID with distribution either $P$ or $Q$ on a discrete alphabet $A$.
Suppose $D(P||Q)\neq 0,\infty$
where $D(P||Q)$ is the [[Information Theory/Relative Entropy]]
### $\implies$
There are decision regions $B_{n}^{*}\subseteq A^{n}$ 
such that $e_{2}^{(n)}(B_{n}^{*})=P^{n}(B_{n}^{*C})\to 0$ as $n\to \infty$
and $e_{1}^{(n)}\leq 2^{-n(D-\epsilon)}$ for all $n\geq 1$ where $D=D(P||Q)$
### $\impliedby$
If $\{ B_{n} \}$ is any sequence of decision regions such that
$$
e_{2}^{(n)}(B_{n}) = P^{n}(B_{n}^{C})\to 0
$$
then there is some $\epsilon>0$ such that
$$
e_{1}^{(n)}=Q^{n}(B_{n}) \geq 2^{-n(D+\epsilon+1/n)}
$$
eventually.

### Proof
#### $\implies$
Suppose $\{ X_{n} \}$ are IID $\sim P$.
Then the likelihood region 
$$
\frac{ P^{n}(X_{1}^{n}) }{ Q^{n}(X_{1}^{n}) } =
\prod_{i=1}^{n} \frac{ P(X_{i}) }{ Q(X_{i}) }
$$
so 
$$
\log \dots \to D(P||Q)
$$
...

Set 
$$
B_{n}^{*} = \left\{  x_{1}^{n}\in A^{n} : 2^{n(D-\epsilon)} \leq \frac{P^{n}(x_{1}^{n})}{Q^{n}(x_{1}^{n})} \leq 2^{n(D+\epsilon)}  \right\}
$$
Then
$$
P^{n}(B_{n}^{*}) = \mathbb{P}(X_{1}^{n}\in B_{n}^{*}) \to 1
$$
and hence
$$
e_{2}^{(n)} = P^{n}(B_{n}^{*C}) \to 0 \text{ as }n\to \infty
$$
Also 
$$
\begin{align}
1 & \geq P^{n}(B_{n}^{*})  \\
 & = \sum_{x_{1}^{n}\in B_{n}^{*}} P^{n}(x_{1}^{n}) \frac{ Q^{n}(x_{1}^{n}) }{ Q^{n}(x_{1}^{n}) }   \\
& \geq \sum_{x_{1}^{n}\in B_{n}^{*}} Q^{n}(x_{1}^{n}) \cdot 2^{n(D-\epsilon)}  \\
 & = 2^{n(D-\epsilon)} Q^{n}(B_{n}^{*})
\end{align}
$$
#### $\impliedby$
Suppose
$$
e_{2}^{(n)}(B_{n}) = P^{n}(B_{n}^{C}) \to 0
$$
so $P^{n}(B_{n})\to 1$
but $P^{n}(B_{n}^{*})\to 1$
so $P^{n}(B_{n}\cap B_{n}^{*})\to 1$ as $n\to \infty$
So eventually 
$$
\begin{align}
\frac{1}{2}  & \leq P^{n}(B_{n}\cap B_{n}^{*})  \\
 & =\sum_{x_{1}^{n}\in B_{n}\cap B_{n}^{*}} P^{n}(x_{1}^{n}) \frac{ Q^{n}(x_{1}^{n}) }{ Q^{n}(x_{1}^{n}) } \\
 & \leq 2^{n(D+\epsilon)} Q^{n}(B_{n}\cap B_{n}^{*}) \\
 & \leq 2^{n(D+\epsilon)} Q^{n}(B_{n}) \\
2^{-n \cdot 1/n}  & \leq 2^{n(D+\epsilon)} e_{1}^{(n)}(B_{n})
\end{align}
$$
The decision regions $B_{n}^{*}$ above are sufficient to identify asymptotically optimal behaviour 
but they are not optimal for finite $n$.
The optimal tests are given by the [[Information Theory/Neumann-Pearson Regions]]

