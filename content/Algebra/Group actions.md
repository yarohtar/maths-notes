An action $G\times X\to X$ is equivalent to a homomorphism $\phi:G\to Sym (X)$ with $\phi(g)(x)=g(x)$.

We denote orbit $Orb_G(x)=\{g(x):g\in G\}$ and stabilizer $G_x=\{g\in G : g(x)=x\}$. The stabilizer of the action is $\ker\phi=\bigcap_{x\in X}G_x$. If $x$ and $y$ are in the same orbit, then their stabilizers are conjugate i.e. if $y=g(x)$, then $G_{y}=gG_xg^{-1}$.

### Orbit-stabilizer 
Suppose we have an action $G\times X\to X$. Then for any $x\in X$, there is a bijection $Orb_G(x)\to G/G_x$. Furthermore, if $G$ is finite, then
$$|Orb_G(x)|\cdot |G_x|=|G|$$
#### Proof
Send $g(x)\to gG_x$.

### Action on itself
When $G$ acts on itself by conjugation, we say $Orb_G(g)$ is the conjugacy class of $g$ (denoted by $ccl_G(g)$), while $G_g$ is the centralizer of $g$ (denoted by $C_G(g)$). The centre of $G$ is $Z(G)=\bigcap_{g\in G}C_G(g)$.

Let $H\leq G$. The normalizer of $H$ in $G$ is: 
$$N_G(H)=\{g\in G: g^{-1}Hg=H\}$$
This is the biggest subgroup of $G$ where $H$ is normal.
#### Ccl and normal subgroups
Suppose $N\triangleleft G$ and $n\in N$. Then for any $g\in G$ we have $gng^{-1}\in N$ so $ccl_G(n)\subseteq N$ i.e. $N$ is a disjoint union of some conjugacy classes. 
Also, any subgroup of $G$ that is a disjoint union of conjugacy classes gives a normal subgroup. Note that a union of conjugacy classes need not necessarily be a subgroup of $G$. 