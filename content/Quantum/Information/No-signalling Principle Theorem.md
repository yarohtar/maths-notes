Let $\ket{\phi_{AB}}\in \mathcal{H}_{A}\otimes \mathcal{H}_{B}$
Let Alice have particle $A$ and Bob have particle $B$ 
Then Alice cannot convey any info to Bob just by doing local measurement on $A$.

## Proof
### Case 1
Bob does a complete measurement on $B$ in basis $\{ \ket{b} \}_{b=1}^{d_{B}}$
Let $\{ \ket{a} \}_{a=1}^{d_{A}}$ onb of $\mathcal{H}_{A}$
Write:
$$
\ket{\phi_{AB}} =\sum c_{ab}\ket{a} \ket{b}
$$
Then 
$$
\begin{align}
p(b)&=\bra{\phi_{AB}} I_{A}\otimes \ket{b} \bra{b} \ket{\phi_{AB}} \\
 & =\sum_{a} \lvert c_{ab} \rvert ^{2}
\end{align}
$$
### Case 2
When alice does a measurement prior to Bob, suppose Alice does measurement on $A$ in $\{ \ket{a} \}$
Then 
$$
p(a)=\sum_{b}\lvert c_{ab} \rvert ^{2}
$$
If outcome is $a$:
$$
\ket{\phi_{AB}} \to(P_{a}\otimes I_{B})\ket{\phi_{AB}} /\sqrt{ p(a) }=\ket{\phi_{AB}'}  
$$
Now Bob does measurement on $B$ in $\{ \ket{b} \}$
$$
\begin{align}
p(b|a)&=\bra{\phi_{AB}''} I_{A}\otimes P_{b}\ket{\phi_{AB}''}  \\
 & =\frac{1}{p(a)}\bra{\phi_{AB}} (P_{a}\otimes I_{B})(I_{A}\otimes P_{b})(P_{a}\otimes I_{B})\ket{\phi_{AB}}  \\
 & =\frac{1}{p(a)}\bra{\phi_{AB}} P_{a}\otimes P_{b}\ket{\phi_{AB}}  \\
\end{align}
$$
So
$$
 p(a,b) = \lvert c_{ab} \rvert ^{2} 
$$
Thus
$$
p(b)=\sum_{a}p(a,b)=\sum_{a}\lvert c_{ab} \rvert ^{2}
$$
same as in Case 1