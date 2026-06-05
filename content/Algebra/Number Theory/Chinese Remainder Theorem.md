Let $m_{1}\dots m_{k}$ be positive integers which are pairwise coprime. Let $M=m_{1}\dots m_{k}$.
### Theorem
 Let $a_{1}\dots a_{k}\in \mathbb{Z}$. Then there exists a solution $x \in \mathbb{Z}$ to the system of simultaneous congruences $x\equiv a_{i}\pmod{m_{i}}$. Moreover this solution is unique modulo $M$.
#### Proof
Uniqueness is easy.
Define $M_{i}=\frac{M}{m_{i}}$. 
Then $(m_{i},M_{i})=1$ so we can find $c_{i}M_{i}\equiv 1\pmod{m_i}$ and also $c_{i}M_{i}\equiv_{0}\pmod{m_{j}}$ for any $j\neq i$.
Then $\sum_{i=1}^{k}a_{i}c_{i}M_{i}$ is a solution

### Theorem
The map:
$$
\begin{align}
\theta: \mathbb{Z}/M\mathbb{Z}&\to(\mathbb{Z}/m_{1}\mathbb{Z})\times\dots \times(\mathbb{Z}/m_{k}\mathbb{Z}) \\
(a+M\mathbb{Z})&\to(a+m_{1}\mathbb{Z},\dots,a+m_{k}\mathbb{Z})
\end{align}
$$
is a [[Algebra/Ring Theory/Ring\|ring]] isomorphism.
#### Proof
We just need to check that its bijective, but this is exactly the previous theorem.
### Corollary
There is a group isomorphism
$$
(\mathbb{Z}/M\mathbb{Z})^\times \cong \left(\mathbb{Z}/m_{1}\mathbb{Z} \right)^\times\dots \times(\mathbb{Z}/m_{k}\mathbb{Z})^\times
$$
#### Proof
Just look at components, its fine.