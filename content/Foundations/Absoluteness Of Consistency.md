Note that any arithmetic operation is an [[Foundations/Absolute Operation]].
Take $\mathrm{Cons}$ from [[Foundations/First Order Logic/Gödel's Incompleteness Theorems]].
Note that $\mathrm{Cons}(T)$ is an arithmetic function.
Thus $\mathrm{Cons}$ is absolute for [[Foundations/Transitive Model]]s.
Let $T^{*}=T\cup \{ \mathrm{Cons}(T) \}$
and define
$$
T^{(n)} = T^{*\dots*} \quad %quad
(n \text{ times})
$$
Also let 
$$
ZFC^{\oplus } = ZFC + \text{ there is a transitive model of }ZFC
$$
### Proposition
$$
ZFC^{\oplus }\vdash ZFC^{(n)}
$$
for all $n$
#### Proof
If there is a model of $ZFC$, then there is certainly no proof of $\bot$
Thus:
$$
ZFC^{\oplus } \vdash ZFC^{*}
$$
Let $M$ be a [[Foundations/Transitive Model]] of $ZFC$.
$\mathrm{Cons}$ is absolute so 
$$
M\models \mathrm{Cons}(ZFC)
$$
i.e. 
$$
M\models ZFC^{*}
$$
But then we have proved 
$$
\mathrm{Cons}(ZFC^{*})
$$
(because it has a model, namely $M$)
We continue by induction.