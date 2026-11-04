Let $B$ be a [[Boolean Algebra]].
The Stone space of $B$ denoted $S(B)$
is the set of [[Boolean Algebra Ultrafilter]]s on $B$.
The basic open sets in $S(B)$ are of the form

$$
\hat{b}=\{ x\in S(B): b\in x \}
$$

where $b\in B$.
Note $\widehat{\neg b}=S(B)\setminus \widehat{b}$ so write $\widehat{\neg b}=\neg \hat{b}$
They generate a topology on $S(B)$.

### Lemma

The space $S(B)$ is [[Compact]], [[Hausdorff]] and [[Totally Disconnected]].

#### Proof

First let $x,y\in S(B)$.
They are distinct, so some $a\in B$ has $a\in x$ and $\neg a\in y$.
Then $\hat{a}$ is an open [[Neighbourhood]] of $x$ and $\neg \hat{a}$ is an open neighbourhood of $y$.
They are clearly disjoint so $S(B)$ is [[Hausdorff]].
Also $\hat{a}\cup \neg \hat{a}=S(B)$.
Thus $S(B)$ is [[Totally Disconnected]].

To prove it is [[Compact]], consider a family of closed sets $(C_{j})_{j\in J}$
with [[Finite Intersection Property]].
We can wlog take $(b_{j})_{j\in J}$ with $C_{j}=\widehat{b_{j}}$.
For any finite $I\subseteq J$ we have $\bigwedge_{i\in I}b_{i}\neq \varnothing$.
Thus

$$
\mathcal{B}=\{ b_{j} : j\in J \}
$$

is a [[Filter Base]].
It extends to a [[Filter]] $\mathcal{F}$.
By [[Ultrafilter Lemma]], $\mathcal{F}$ extends to an [[Ultrafilter]] $\mathcal{U}$.
Then one checks that

$$
\mathcal{U}\in\bigcap_{j\in J} \widehat{b_{j}}
$$

which completes the proof.
