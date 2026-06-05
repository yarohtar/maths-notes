Let $G$ be a [[Algebra/Group Theory/Group]].
The set of [[Algebra/Group Theory/Sylow Subgroup]]s $Syl_p(G)$ is nonempty.
#### Proof
Consider $\Omega$, the set of all subsets of $G$ of size $p^a$. 
Note that $|\Omega|={p^am\choose p^a}$ which is not divisible by $p$. 
Consider the natural (left multiplication) [[Algebra/Group Theory/Group action]] of $G$ on $\Omega$.
It has at least one [[Algebra/Group Theory/Orbit]] not divisible by $p$.
Suppose that is the orbit of $X\subseteq G$. 
Now $|G_X|\cdot |Orb_G(X)|=|G|$ by [[Algebra/Group Theory/Orbit-Stabilizer Theorem]] 
so $p^a\mid |G_X|$
so $|G_X|\geq p^a$. 
But also $|G|\leq |Orb_G(X)|\cdot |X|$ 
because $G=\bigcup_{g\in G} g(X)=\bigcup_{Y\in Orb_G(X)}Y$.  
So $|G_X|\leq p^a$ 
so $|G_X|=p^a$. 