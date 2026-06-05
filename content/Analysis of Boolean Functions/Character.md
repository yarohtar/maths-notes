Let $G$ be a finite [[Algebra/Group Theory/Abelian]] [[Algebra/Group Theory/Group]].
A character on $G$ is a [[Algebra/Group Theory/Homomorphism]] 
$$
\chi:G\to \mathbb{T}=\{ z\in \mathbb{C}:\lvert z \rvert =1 \}
$$

## Theorem
The characters on $G$ form an [[Analysis/Orthonormal Basis]] of $\mathbb{C}^{G}$.
### Proof
Let $\chi_{1}$ and $\chi_{2}$ be characters and $\chi=\chi_{1}\overline{\chi_{2}}$.
If $\chi_{1}=\chi_{2}$ then clearly $\mathbb{E}_{x}\chi = 1$.
Otherwise pick some $u$ such that $\chi(u)\neq 1$ and note:
$$
\mathop{\Large\mathbb{E}}\limits_{x\in G}\chi(x) = \mathop{\Large\mathbb{E}}\limits_{x\in G} \chi(ux) = \chi(u)\mathop{\Large\mathbb{E}}\limits_{x\in G}\chi(x)
$$
and thus $\mathbb{E}_{x}\chi(x)=0$.

It remains to prove that they span $\mathbb{C}^{G}$.
As $G$ is a [[Algebra/Group Theory/Finite Abelian Group]], write
$$
G=\mathbb{Z} / m_{1}\mathbb{Z} \times \mathbb{Z} / m_{2} \mathbb{Z} \times \dots \times \mathbb{Z} / m_{n} \mathbb{Z}
$$
Given $r,x\in G$ where $r=(r_{1},\dots,r_{n})$ and $x=(x_{1},\dots x_{n})$ let
$$
\chi_{r}(x) = \prod_{j=1}^{n} e^{2\pi i \frac{ r_{j}x_{j} }{ m_{j} }}
$$
Easy to show that these are characters and for $r\neq s$ we have $\chi_{r}\neq \chi_{s}$.

Now note that $\mathbb{C}^{G}$ is a vector space of dimension $\lvert G \rvert$ (e.g. by using $\{ 1_{x} : x \in G \}$) 
and the characters form an orthonormal set of size $\lvert G \rvert$ so we are done.

### Lemma
Let $x,y\in G$. Then 
$$
\sum_{\chi} \chi(xy^{-1}) = \Delta_{xy}=\begin{cases}
\lvert G \rvert  & \text{if $x=y$}\\
0 & \text{otherwise}
\end{cases}
$$





