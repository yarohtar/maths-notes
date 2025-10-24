Let $L$ be a [[Foundations/First Order Logic/First-Order Predicate Logic]] [[Foundations/First Order Logic/Language]].
Let $S$ be a set of [[Foundations/First Order Logic/Sentence]]s in $L$ and let $t$ be a [[Foundations/First Order Logic/Sentence]] in $L$ 
We say $S$ semantically entails $t$ or $S\models t$ 
if $t$ is [[Foundations/First Order Logic/Satisfied]] in every [[Foundations/First Order Logic/Model]] of $S$.

Furthermore, let $S$ be a set of formulae in $L$ and $t\in L$
Introduce new constants in $L$ 
one for each free variable occurring in $S\cup \{ t \}$
For any $u\in S\cup \{ t \}$, 
let $u'$ be the [[Foundations/First Order Logic/Sentence]] in the new language $L'$ 
obtained from $u$ by replacing free vars with the new constants
Set $S'=\{ s': s \in S \}$ 
We say $S$ entails $t$ or $S\models t$, if $S'\models t'$
