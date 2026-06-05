Let $f:\{ -1,1 \}^{n}\to \mathbb{R}$ be a function on the $p$-[[Analysis of Boolean Functions/Biased Cube]] 
with [[Analysis of Boolean Functions/Degree of a Boolean Function]] at most $k$.
Then
$$
\lVert f \rVert _{4} \leq C^{k/2}\lVert f \rVert _{2}
$$
#### Proof
By induction on $n$.
Let $g=E_{n}f$ and $h=D_{n}f$ as in [[Analysis of Boolean Functions/Discrete Derivative]].
By orthogonality:
$$
\lVert f \rVert _{2}^{2} = \lVert g \rVert _{2}^{2} + \lVert \phi_{n}h \rVert _{2}^{2} = \lVert g \rVert _{2}^{2} + \lVert h \rVert _{2}^{2}
$$
Note also that $D_{n}f$ has degree at most $k-1$ as
$$
D_{n}f = \sum_{A\ni n} \hat{f}(A)\phi_{A\setminus \{ i \}}
$$
So 
$$
\lVert f \rVert _{4}^{4} = \mathop{\Large\mathbb{E}}\limits_{x} (g(x)^{4} + 4\phi_{n}(x)g(x)^{3}h(x)+ 6\phi_{n}(x)^{2}g(x)^{2}h(x)^{2} + 4\phi_{n}(x)^{3}g(x)h(x)^{3} + \phi_{n}^{4} h(x)^{4})
$$
We can drop the second term as $\mathop{\mathbb{E}}\phi_{n}=0$.
Also $\mathop{\mathbb{E}}\phi_{n}^{2}=1$.
In the case $p=q=\frac{1}{2}$ we can also drop the third term and have $\mathop{\mathbb{E}}\phi_{n}^{4}=1$.
In general note:
$$
\begin{gather}
\phi(1)= \sqrt{ \frac{p}{q} } \\
\phi(-1)=\sqrt{ \frac{q}{p} } \\
\lvert\mathop{\mathbb{E}}\phi_{n}^{3}   \rvert = \left\lvert  q \left( \frac{ p }{ q } \right)^{3/2} - p \left( \frac{q}{p} \right)^{3/2}  \right\rvert =\left\lvert  \frac{ p^{2}-q^{2} }{ \sqrt{ qp } }  \right\rvert = \left\lvert  2 \frac{ p-q }{ \sigma }  \right\rvert \leq \frac{2}{\sigma} \\ \\
\mathop{\mathbb{E}}\phi_{n}^{4} = \frac{ p^{3}+q^{3} }{ pq } \leq \frac{4}{\sigma^{2}}
\end{gather}
$$
Now use [[Analysis/Hölder inequality]] to find
$$
\lVert f \rVert _{4}^{4} \leq \lVert g \rVert _{4}^{4} + 6  \lVert g \rVert _{4}^{2} \lVert h \rVert _{4}^{2} + \frac{8}{\sigma} \lVert g \rVert _{4}\lVert h \rVert _{4}^{3} + \frac{4}{\sigma^{2}} \lVert h \rVert _{4}^{4}
$$
and apply inductive step:
$$
\lVert f \rVert _{4}^{4} \leq C^{2k}\left( \lVert g \rVert _{2}^{4} + 6 C^{-1}\lVert g \rVert _{2}^{2}\lVert h \rVert _{2}^{2} + \frac{8}{\sigma}C^{-3/2}\lVert g \rVert _{2}\lVert h \rVert _{2}^{3}+ C^{-2}\frac{4}{\sigma^{2}}\lVert h \rVert _{2}^{4} \right)
$$
Apply 
$$
ab\leq \frac{ a^{2}+b^{2} }{ 2 }
$$
with $a=2\lVert g \rVert_{2}\lVert h \rVert_{2}C^{-1/2}$ and $b=C^{-1} \frac{4}{\sigma}\lVert h \rVert_{2}^{2}$ to find
$$
\frac{8}{\sigma}C^{-3/2} \lVert g \rVert _{2} \lVert h \rVert _{2}^{3} \leq 2\lVert g \rVert _{2}^{2}\lVert h \rVert _{2}^{2}C^{-1} + \frac{8}{\sigma^{2}}C^{-2} \lVert h \rVert _{2}^{4}
$$
and
$$
\lVert f \rVert _{4}^{4} \leq C^{2k} \left( \lVert g \rVert _{2}^{4} + 8C^{-1}\lVert g \rVert _{2}^{2}\lVert h \rVert _{2}^{2} + \frac{12}{\sigma^{2}}C^{-2} \lVert h \rVert _{2}^{4} \right)
$$
Finally, choose $C$ such that $8C^{-1}\leq 2$ and $\frac{12}{\sigma^{2}}C^{-2}\leq 1$ i.e. $C=\frac{4}{\sigma^{2}}$ will do and
$$
\lVert f \rVert _{4}^{4} \leq C^{2k} (\lVert g \rVert _{2}^{2} + \lVert h \rVert _{2}^{2})^{2} = C^{2k}\lVert f \rVert _{2}^{4}
$$
### Corollary
Let $\rho=\frac{\sigma}{2}$ (i.e. $\rho^{2}=C^{-1}$)
Then for every $f:\{ -1,1 \}^{n}\to \mathbb{R}$ and [[Analysis of Boolean Functions/Noise]] operator $T_{\rho}$ we have
$$
\lVert T_{\rho}f \rVert _{4} \leq \lVert f \rVert _{2}
$$
#### Proof
$$
\begin{align}
\lVert T_{\rho}f \rVert _{4} & \leq \sum_{k=0}^{n} \lVert T_{\rho}f^{(=k)} \rVert _{4}  \\
 & = \sum_{k=0}^{n} \rho^{k} \lVert f^{(=k)} \rVert _{4}  \\
 & \leq \sum_{k=0}^{n} \rho^{k} C^{k/2} \lVert f^{(=k)} \rVert _{2} \\
 & = \sum_{k=0}^{n} \lVert f^{(=k)} \rVert _{2}  \\
  & \leq \sqrt{ n } \left( \sum_{k=0}^{n} \lVert f^{(=k)} \rVert_{2}^{2}  \right)^{1/2}\\
 & = \sqrt{ n }\lVert f \rVert _{2}
\end{align}
$$
where the last inequality is [[Information Theory/Jensen's Inequality]] and the last line is [[Analysis/Pythagoras]].
We are done by [[Analysis of Boolean Functions/Tensor Power Trick]].

### Corollary
Let $\rho=\frac{\sigma}{2}$ and $f:\{ -1,1 \}^{n}\to \mathbb{R}$.
Then
$$
\lVert T_{\rho}f \rVert _{2} \leq \lVert f \rVert _{\frac{4}{3}}
$$
#### Proof
Use 
$$
\lVert T_{\rho}f \rVert_{2} =\max_{\lVert g \rVert _{2}=1} \braket{ T_{\rho}f | g } 
$$
and note that the [[Analysis of Boolean Functions/Noise]] operator is self-[[Analysis/Hilbert Space/Adjoint]] so
$$
\lVert T_{\rho}f \rVert _{2} = \max_{\lVert g \rVert _{2}=1} \braket{ f | T_{\rho}g } 
$$
If $\lVert g \rVert_{2}=1$ then $\lVert T_{\rho}g \rVert_{4}\leq 1$ so $\braket{ f | T_{\rho}g }\leq \braket{ f | h }$ for some $\lVert h \rVert_{4}=1$ i.e.
$$
\lVert T_{\rho}f \rVert _{2} \leq \max_{\lVert h \rVert _{4}=1} \braket{ f | h } =\lVert f \rVert _{\frac{4}{3}}
$$
as $L_{\frac{4}{3}}$ is the dual of $L_{4}$
(or we can just say $\leq$ by [[Analysis/Hölder inequality]] which suffices).
### Corollary
$$
\mathrm{Stab}_{\frac{\sigma^{2}}{4}} f\leq\lVert f \rVert _{\frac{4}{3}}^{2}
$$
#### Proof
$$
\begin{align}
\lVert f \rVert _{\frac{4}{3}}^{2}  & \geq \braket{ T_{\rho}f | T_{\rho} f }  \\
 & = \braket{ f | T_{\rho^{2}}f }  \\
 & = \mathrm{Stab}_{\rho^{2}}f
\end{align}
$$

