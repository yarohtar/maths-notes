### Theorem
Let $u:I\to S^1$, $u(t)=e^{2\pi it}$ loop based at $1\in S^1$. 
Then there's a group isomorphism
$$
\begin{align}
\pi_{1}(S^1,1) & \to (\mathbb{Z},+) \\
[u] & \to 1
\end{align}
$$
#### Proof
Take the [[Homotopy/Covering Spaces\|covering map]] $p:\mathbb{R}\to S^1$ with $p(t)=e^{2\pi it}$.

$p ^{-1}(1)=\mathbb{Z}\subseteq \mathbb{R}$.
Basepoint $\tilde{x}_{0}=0\in p ^{-1}(1)$. 
This determines a [[Homotopy/Covering Fundamental groups#Corollary\|bijection]] $l:\pi_{1}(S^1,1)\to \mathbb{Z}$.

Product law??
$l_{m}:I\to \mathbb{R}$ with $t\to mt$.
$l_{m}:0\leadsto m$ for $m\in \mathbb{Z}$.
$l ^{-1}(m)=[p\circ l_{m}]$ by definition

$l(l^{-1}(n)l^{-1}(m))=$ end point of lift of $[p\circ l_{m}]$ starting at $n$ = $n+m$

### Corollary
[[Homotopy/Fundamental Theorem of Algebra]]

### Theorem
The disc $D^2$ does not retract to $S^1$. 
#### Proof
By contradiction.
Let $i:S^1\to D^2$ be the inclusion.
Suppose $r:D^2\to S^1$ is a [[Homotopy/Retraction map\|retraction]], $r\circ i=id_{S^1}$
Consider the fundamental groups:
$$
\pi_{1}(S^1,1)\to_{i_{*}} \pi_{1}(D^2,1)\to_{r_{*}} \pi_{1}(S^1,1)
$$
But $(r\circ i)_{*}=id_{\mathbb{Z}}$, so this is a contradiction because $\pi_{1}(D^2,1)=\{ * \}$
### Corollary
[[Homotopy/Browen's Fixed Point Theorem]]
