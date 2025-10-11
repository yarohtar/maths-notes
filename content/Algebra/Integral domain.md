Ring $R$ is an integral domain if for every $a,b\in R$ we have $ab=0\implies a=0\lor b=0$. 

### Lemma
If $R$ is an integral domain, so is $R[X]$.

### Lemma
Let $R$ be an integral domain and $0\neq f\in R[X]$. Then the number of roots of $f$ in $R$ is at most $\deg f$.

### Proposition
Any finite integral domain is a field.

### Theorem
Let $R$ be an integral domain. Then there is a field $F$ s.t. 
1. $R\leq F$
2. Every element of $F$ can be written as $ab^{-1}$ for some $a,b\in R$. 
$F$ is the unique minimal field containing $R$ and is called the field of fractions of $R$.

### Theorem
Every finite subgroup of the multiplicative group of a field is cyclic.
#### Proof
Suppose $A$ is a finite multiplicative subgroup of a field. Then $A$ is Abelian. Hence, $A$ contains a subgroup isomorphic to $C_m\times C_m$ for some $m\geq 2$.  But then $f(X)=X^m-1$ has at least $m^2$ roots. 
