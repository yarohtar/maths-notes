Let $G$ be a finite group of order $p^am$ where $p \nmid m$. A Sylow $p$-subgroup of $G$ is $P\leq G$ s.t. $|P|=p^a$. The set of Sylow $p$-subgroups is denoted by $Syl_p(G)=\{P\leq G: |P|=p^a\}$. 
### First Sylow Theorem
The set $Syl_p(G)$ is nonempty.
#### Proof
Consider $\Omega$, the set of all subsets of $G$ of size $p^a$. Note that $|\Omega|={p^am\choose p^a}$ which is not divisible by $p$. Consider the natural (left multiplication) action of $G$ on $\Omega$. It has at least one orbit not divisible by $p$, suppose that is the orbit of $X\subseteq G$. Now $|G_X|\cdot |Orb_G(X)|=|G|$ by [[Algebra/Group actions#Orbit-stabilizer\|orbit-stabilizer]] so $p^a\mid |G_X|$ i.e. $|G_X|\geq p^a$. But also $|G|\leq |Orb_G(X)|\cdot |X|$ because $G=\bigcup_{g\in G} g(X)=\bigcup_{Y\in Orb_G(X)}Y$.  So $|G_X|\leq p^a$ so $|G_X|=p^a$. 
### Second Sylow Theorem
All elements of $Syl_p(G)$ are conjugate. 
#### Proof
We prove a stronger statement (DONT NEED TO). Suppose $P\in Syl_p(G)$ and $Q\leq G$ is a $p$-subgroup. Then $Q\leq gPg^{-1}$ for some $g\in G$. Consider the action of $Q$ on left cosets of $G/P$ by left multiplication. Note that $|G/P|=m$, so there is at least one orbit not divisible by $p$. But all orbits divide $|Q|$, so there is an orbit of size $1$. So for some $g\in G$, and every $q\in Q$ we have $qgP=gP$ i.e. $g^{-1}qg\in P$. Hence for some $g\in G$ we have $Q\leq gPg^{-1}$. 
### Third Sylow Theorem
The number $n_p=|Syl_p(G)|$ satisfies $n_p\equiv 1\pmod{p}$ and $n_p\mid m$.
#### Proof
By the second Sylow theorem, $G$ acts transitively on $Syl_p(G)$, so $n_p\mid |G|$ so it suffices to show $n_p\equiv 1\pmod p$. Let $P$ be a Sylow $p$-subgroup. Consider the conjugacy action of $P$ on $Syl_p(G)$. Note that all orbits of this action are divisors of $|P|=p^a$. Also $Orb_P(P)=\{P\}$. Suppose another orbit has order 1, i.e. orbit of $Q$ is of size 1. 
Then $P\leq N_G(Q)$, so $P$ and $Q$ are Sylow $p$-subgroups of $N_G(Q)$. So for some $g\in N_G(Q)$ we have $P=gQg^{-1}=Q$. 
Hence there is exactly one orbit of size $1$, but $n_p$ is the sum of orbit sizes so it has to be $n_p\equiv 1\pmod p$.
### Corollary
If $n_p=1$ then there is a normal Sylow $p$-subgroup of $G$.
#### Proof
$Syl_p(G)$ is closed under conjugation.
