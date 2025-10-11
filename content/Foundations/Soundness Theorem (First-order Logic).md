Let $S$ be a set of formulae in a first-order language $L$ and $p$ be a formula in $L$
If $S\vdash p$ then $S\models p$

#### Proof (NONEXAMINABLE)
By induction on the length of a proof of $p$ from $S$ 
In the case $p$ is $(\forall x)q$, there is a subset $S_{1}\subseteq S$ s.t. $x$ doesn't occur free in $S$, and $S_{1}\vdash q$. Then by induction $S_{1}\models q$
Since $x$ does not occur free in $S$, we have $S_{1}\models(\forall x)q$ and so $S\models p$

