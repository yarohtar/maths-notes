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
$\mathrm{Cons}$ is [[Foundations/Absolute]] so
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
Now $M$ is a [[Foundations/Transitive Model]] of $ZFC^{*}$.
We continue by induction.
### Remark
We have proved that $ZFC^{\oplus}$ is much stronger than $ZFC^{*}$.
However, assuming $\mathrm{Cons}(ZFC)$, take a [[Foundations/First Order Logic/Model]] $M$ of $ZFC$
We can construct an inner model (e.g. [[Foundations/Constructible Model of Set Theory]])
$$
L^{M}\models ZFC
$$
where $L^{M}$ is [[Foundations/Set Theory/Transitive\|Transitive]] in $M$.
This might seem like an issue, as we might think that $M\models ZFC^{\oplus}$.
However, $M$ doesn't see $L^{M}$ as a set.
Thus $M$ doesn't entail $\mathrm{Cons}(ZFC)$ (at least not as witnessed by $L^{M}$)
and certainly $M$ doesn't entail $ZFC^{\oplus}$.
