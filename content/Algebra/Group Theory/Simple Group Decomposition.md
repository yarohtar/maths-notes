If $G$ is a finite group, then it has a composition series:
$$1=G_0\triangleleft G_1\triangleleft \dots \triangleleft G_m=G$$
where the [[Algebra/Group Theory/Quotient Group]] $G_i/G_{i-1}$ is simple for each $i$.
#### Proof 
By induction on $|G|$.
If $G$ is simple, done.
Otherwise find a proper [[Algebra/Group Theory/Normal]] [[Algebra/Group Theory/Subgroup]] of maximal order $H\triangleleft G$.
Suppose $G/H$ has a normal subgroup $K$.
Then there is a normal subgroup $L$ of $G$ s.t. $L/H=K$ is normal in $G/H$.
But then $L$ contains $H$ so, as $H$ is maximal, has to be $L=H$, 
but then $K=\{e\}$ hence induct. 