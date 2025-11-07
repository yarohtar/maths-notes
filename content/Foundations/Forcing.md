If $T\subseteq ZFC$ is finite then there is $T^{*}\subseteq ZFC$ finite such that
Whenever $M\models T^{*}$ countable [[Foundations/Transitive Model\|Transitive]], 
then there is a $N\supseteq M$ countable [[Foundations/Countable Transitive Model]] where 
$$
N\models T^{*}+\neg CH
$$
#### Fake proof
Find in $M$ some $\alpha$, $\beta$ such that 
$$
M\models \alpha=\aleph_{1} \land \beta=\aleph_{2}
$$
Lets assume $M\models CH$.
We find in $M$ some $P\subseteq \mathcal{P}(\mathbb{N})$ such that 
$$
M\models P \text{ is the powerset of }\mathbb{N}
$$
and find some $f\in M$ such that $f:\alpha \to P$ is bijective.

Find, outside of $M$, some $g:\beta \to \mathcal{P}(\mathbb{N})$ injective.
Clearly, $g\not\in M$.
Take $X$ to be the transitive closure of $M\cup \{ g \}$ (which is countable)
and form a countable transitive model of $ZFC$ containing $X$.
Then in $N$, we have $\lvert \mathcal{P}(\mathbb{N}) \rvert\geq \lvert \beta \rvert$
But we have no control over $\alpha$ and $\beta$ and whether $N\models \alpha=\aleph_{1}\land \beta=\aleph_{2}$
So we can't do it like this.
## Theorem (Forcing)
IF $ZFC$ has a [[Foundations/Countable Transitive Model]] then ...
### Proof
Assume $ZFC$ is consistent and to contradiction that $ZFC+\neg CH$ is not.
So find $T\subseteq ZFC$ finite such that $T+\neg CH$ is inconsistent.
Take $T^{*}$ as above.
Find a countable [[Foundations/Transitive Model]] $M\models T^{*}$.
Now there is a countable [[Foundations/Transitive Model]] $N\supseteq M$ such that 
$$
N\models T+\neg CH
$$
which is a contradiction!!
