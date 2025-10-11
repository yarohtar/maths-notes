A group is simple if it has no proper normal subgroups.

### Abelian simple
Abelian group is simple if and only if it is isomorphic to $C_p$ for some prime $p$.

### Decomposition
If $G$ is a finite group, then it has a composition series:
$$1=G_0\triangleleft G_1\triangleleft \dots \triangleleft G_m=G$$
where $G_i/G_{i-1}$ is simple for each $i$.
#### Proof 
By induction on $|G|$. If $G$ is simple, done. Otherise find a proper normal subgroup of maximal order, $H\triangleleft G$. Suppose $G/H$ has a normal subgroup $K$. Then there is a normal subgroup $L$ of $G$ s.t. $L/H=K$ is normal in $G/H$. But then $L$ contains $H$ so, as $H$ is maximal, has to be $L=H$, but then $K=\{e\}$ hence induct. 