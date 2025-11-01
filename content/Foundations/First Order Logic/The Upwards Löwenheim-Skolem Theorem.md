If a finite order theory $S$ has an infinite model, then $S$ has an uncountable model.
#### Proof
Add uncountably many new constants $\{ c_{i}:i\in I \}$ to the language.
Consider 
$$
S'=S\cup \{ \neg(c_{i}=c_{j}):i,j\in I,i\neq j \}
$$
By assumption $S$ has an infinite model, which is a model of every finite subset of $S'$.
By [[Foundations/First Order Logic/Compactness Theorem]] $S'$ has a model $A$, 
i.e. a model $A$ of $S$ together with an injection $I\to A:c_{i}\to(c_{i})_{A}$
### Note
For any set $X$, can take $I=\gamma(X)$ [[Foundations/Ordinals/Hartogs' Lemma]]
Then the proof yields a model of $S$ that cannot inject into $X$.
