A linear order (or total order) on a set $X$ is a relation $<$ on $X$ that is:
1. irreflexive $\forall x\in X,\ \neg(x<x)$
2. transitive $\forall x,y,z\in X\ ((x<y)\land(y<z))\implies(x<z)$
3. trichotomous $\forall x,y\in X\ (x<y)\lor(x=y)\lor(y<x)$
We say $X$ is linearly ordered by $<$, 
or simply $X$ is a linearly ordered set. 

### Notation
For $x,y\in X$ write
$x>y$ for $y<x$
and $x\leq y$ for "$x<y$ or $x=y$"
This satisfies:
1. reflexivity $\forall x\in X\ x\leq x$
2. antisymmetric: $\forall x,y\in X\ (x\leq y\land y\leq x)\implies x=y$
3. transitive: $\forall x,y,z\in X\ (x\leq y\land y\leq z)\implies x\leq z$
4. trichotomous: $\forall x,y\in X\ (x\leq y\lor y\leq x)$
