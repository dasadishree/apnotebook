const NOTES = {
    "AP Biology": {
        color: "#7c74d8",
        units: {
            "Unit 1: Chemistry of Life": {
                tags: ["characteristics of life", "feedback", "scientific method", "chemistry", "macromolecules"],
                content: `
                    <h2 id="h-life">Chapter 1A: A View of Life - Overview</h2>
                    <h3>Characteristics of Life</h3>
                    <ul>
                        <li>Organized and made of at least one cell</li>
                        <li>Acquire/use materials and energy from the original source of the sun to do work and carry out all cellular processes <strong>metabolism</strong></li>
                        <li>Maintain <strong>homeostasis</strong> (stable internal balance) through negative feedback mechanisms</li>
                        <li>Respond to stimuli in environment (ex: heat, sun, plants growing against the force of gravity)</li>
                        <li>Reproduce, grow, and develop by passing on genetic info/DNA to the next generation, which is crucial for a species but not an individual</li>
                        <li>Evolve and adapt: changing environments cause populations (not individuals) to adapt/modify to function better with favorable variations selected for</li>
                    </ul>

                    <h3>Levels of Organization</h3>
                    <p>Atoms --> Molecule (2+ atoms of same/different elements) --> Cell --> Tissue --> Organ --> Organ System --> Organism (an individual) --> Population (organisms of same species in an area) --> Community (interacting living populations in an area) --> Ecosystem (living + nonliving in a particular area) --> Biome (same ecosystems all over the world) --> Biosphere (Earth)</p>

                    <h3>Feedback Mechanisms</h3>
                    <p>Used to maintain internal environments in response to internal/external changes</p>
                    <div>
                    <div>
                        <p><strong>Negative Feedback Mechanisms</strong></p>
                        <ul>
                            <li>Maintain homeostasis by keeping variables close to the target set point (ex: body temperature, blood glucose/pH, thermoregulation through sweating/shivering)</li>
                            <li>Body reacts to environment</li>
                            <li>Sensors detect environmental changes causing body imbalance, control/regulatory centers initiate actions to bring conditions back to normal, then once its normal, inhibitory mechanisms reverse these actions to avoid overcorrection</li>
                            <li>Dynamic equilibrium</li>
                            <li><strong>Thermoregulation:</strong> higher temperature = faster molecules = faster reactions and metabolism</li>
                            <li>Endotherms: warm-blooded, warmed by internal metabolic processes</li>
                            <li>Exotherms: cold-blooded, gaining heat from external synthesis w/ little metabolic heat</li>
                        </ul>
                    </div>
                    <div>
                        <p><strong>Positive Feedback Mechanisms</strong></p>
                        <ul>
                            <li>Mechanism amplifying a change and achieving a goal (NOT homeostasis or equilibrium)</li>
                            <li>Conditions moved further and further from initial set point as response gets intense, until an endpoint is reached which stops process</li>
                            <li>Usually some hormone or impulse causing the mechanism</li>
                            <li>Ex: labor onset / childbirth, breastfeeding, blood platelet activation, fruit ripening</li>
                        </ul>
                    </div>
                    </div>

                    <h3>Scientific Method</h3>
                    <ol>
                        <li>Make observations</li>
                        <li>Pose a specific testable measurable question w/ one independent manipulated variable</li>
                        <li>Research the question</li>
                        <li>Formulate a working testable hypothesis as a statement (no words like proved/disproved, use supported/rejected/refuted/reformed)</li>
                        <li>Repeatable controlled experiment w/ multiple trials/test subjects and large sample size (n) for more accurate results, only one variable altered at a time
                            <ul>
                                <li>Controls/constants - controlled variables kept identical in all setups</li>
                                <li>Control groups - standard of comparison to validate experimental results
                                    <ul>
                                        <li>Negative control - show what happens when IV is absent or has no effect to ensure no contamination, confounders, or false positives/placebos</li>
                                        <li>Positive control - show what a known measurable response looks like to ensure experiment is working properly, no false negatives</li>
                                    </ul>
                                </li>
                                <li>Experimental groups - groups that get experimental treatment</li>
                                <li>Independent variable - manipulated variable by experimenter on x-axis</li>
                                <li>Dependent variable - variable that changes/responds to IV on y-axis</li>
                            </ul>
                        </li>
                        <li>Data collection/experimental observations through quantitative (numerical) and qualitative (descriptive) data</li>
                        <li>Data analysis through graphs, charts, tables, and stats</li>
                        <li>Make a conclusion w/o using prove/disprove, use supported/rejected/refuted</li>
                        <li>Communicate findings through peer-reviewed journals</li>
                    </ol>

                <h3>Graphs</h3>
                <p>Appropriate specific title (ex: The Effect of IV on DV), axes labels w/ units, key/legend, consistent appropriate scale w/ equal increments including the first increment (origin does not have to start at zero, breaks sometimes allowed, labeling the corner as 0 is for both x and y axis)</p>
                <div>
                    <div>
                        <p><strong>Line Graph</strong></p>
                        <ul>
                            <li>Show relationship between 2 numerical, continuous variables</li>
                            <li>Visualize DV changes over time or across a gradient like temperature, distance, or pH</li>
                            <li>Data usually in a specific order</li>
                            <li>Points connected by a line, sometimes each point represents mean value w/ error bars</li>
                        </ul>
                    </div>
                    <div>
                        <p><strong>Scatter Plot</strong></p>
                        <ul>
                            <li>Show relationships between 2 numerical, continuous variables</li>
                            <li>No inherent x-value order given on data table</li>
                            <li>Often used to look for correlation/association</li>
                            <li>Data points shouldn't be connected & are often scattered across graph</li>
                            <li>Trend line shows overall direction of relationship of correlation (can be curved but shouldn't extend past provided points)</li>
                        </ul>
                    </div>
                    <div>
                        <p><strong>Bar Graph</strong></p>
                        <ul>
                            <li>Compare differences in dependent variable across categories/groups</li>
                            <li>Bars don't touch</li>
                            <li>Bar can represent mean value w/ error bars</li>
                            <li>Error bars = +/- 2 standard error of the means</li>
                        </ul>
                    </div>
                    <div>
                        <p><strong>Histogram</strong></p>
                        <ul>
                            <li>Display distribution of data showing central tendencies/spread (often looks like a bell curve)</li>
                            <li>Uniform range intervals</li>
                            <li>Bars touch</li>
                        </ul>
                    </div>
                    <div>
                        <p><strong>Pie Chart</strong></p>
                        <ul>
                            <li>Compare different percentages/parts of a whole</li>
                            <li>Representative of proporition to full dataset</li>
                            <li>Usually categorical</li>
                        </ul>
                    </div>
                    <div>
                        <p><strong>Log Scale (Semi-Log) Graphs</strong></p>
                        <ul>
                            <li>Uses logarithmic nonlinear scale if data spans very large quantities</li>
                            <li>Compress large range into small graph</li>
                            <li><em>The numbers with a 1, from low to high, are what you count from, and what you count by</em></li>
                            <li>Count by the same increment of 10 until the next multiple of 10</li>
                            <li>Value of a point between two tick marks is geometric mean of tickmark values: sqrt(xy), or you can approximate by being about half the average between the lines</li>
                        </ul>
                    </div>
                    <div>
                        <p><strong>Dual Y-Axes Graphs</strong></p>
                        <ul>
                            <li>Used to portray two different dependent variables w/ different units or measurement/number ranges/magnitudes</li>
                            <li>Labels on both ends, key showing different colors</li>
                        </ul>
                    </div>
                    <div>
                        <p><strong>Box and Whisker Plots</strong></p>
                        <ul>
                            <li>Compare spread and distribution summary on an interval</li>
                            <li>Show skewed data or outliers, median/middle value, range, and interquartile range (show how spread out data is)</li>
                            <li>Can be horizontal or vertical</li>
                            <li>Start line = lower extreme (min), start of box = lower quartile (Q1), middle of box = median (Q2), end of box = upper quartile (Q3), end line = upper extreme (max), whiskers = range of data, length of box=interquartile range (IQR), points outside whiskers = outliers
                                <ul>
                                    <li>Q1 and Q3 are medians of the lower and upper halves of dataset</li>
                                    <li>Outliers can be represented as single data points outside the box/whiskers</li>
                                </ul>
                            </li>
                    </div>
                </div>
                
                <h2>Chapter 1B: Math & Statistical Applications</h2>
                <ul>
                    <li>Metric System: KHDUDCM**M**N</li>
                    <li>Mean/average = sum of all data points / # of items</li>
                    <li>Median/middle value = middle value of dataset of average of 2 middle vales</li>
                    <li>Mode = most frequent value in dataset</li>
                    <li>Range = difference between max-min</li>
                    <li><strong>Standard Deviation</strong>: measure of how far spread out a dataset is or how much it deviates/how far away it is from the mean
                        <ul>
                            <li>Higher SD = most data points are further from mean</li>
                            <li>Higher range = higher standard deviation</li>
                            <li>Zero = all values are identical</li>
                            <li>Formula on reference table: xi = value of one point, x with line over = mean, sigma = sum, n=sample size</li>
                            <li>68-95-99.7 (+- 1 std is 68%, +-2std is 95%, +-3std is 99.7% of mean) - empirical normal distribution or bell curve</li>
                        </ul>
                    </li>
                    <li><strong>Standard Error</strong>: measure how well the sample mean match up to the true population mean
                        <ul>
                            <li>Measure variation in sample means of datasets from the same population</li>
                            <li>Formula on reference table: s=standard deviation, n=sample size</li>
                            <li>Higher standard deviation = higher standard error</li>
                            <li>Error bars = +/- 2SEm above and below the bar or dot which is the mean (95% CI)
                                <ul>
                                    <li>Shows statistical significance - if the bars overlap its insignificant</li>    
                                </ul>
                            </li>
                        </ul>
                    </li>
                    <li><strong>Null Hypothesis</strong>: statistical hypothesis that states that any difference between 2 factors is purely due to chance and there is no causal statistically significant relationship between 2 variables.
                        <ul>
                            <li>Or if the scenario presents statistical expectation, null hypothesis assumes outcome = statistical expectation</li>
                            <li>If results are significant, the null hypothesis is rejected, statistically significant difference :)</li>
                            <li>If results are insignificant, the null hypothesis fails to be rejected, no statistically significant difference :(</li>
                            <li>Not the same as experimental hypothesis</li>
                        </ul>
                    </li>
                    <li><strong>Chi-Square Analysis</strong>: evaluate null hypothesis and see if difference in observation is significant or not in categorical data
                        <ul>
                            <li>Formula on reference table (o=observed value, e=expected value, x^2=chi square value)</li>
                            <li>Compare this value to critical chi square value table that corresponds to pvalues based on degrees of freedom</li>
                            <li>Degrees of freedom = # of outcomes/categories - 1</li>
                            <li>P-value = value between 0 and 1 determining significance, smaller (less than 0.05) is 95% CI significant</li>
                            <li>Critical chi-square values - values to use as benchmarks to compare your chi-square value at p=0.05 and p=0.01
                                <ul>
                                    <li>if value smaller than corresponding critical value  = fail to reject null</li>
                                    <li>if your chisquare is bigger = null is rejected</li>
                                </ul>
                            </li>
                        </ul>
                    </li>
                </ul>

                <h2>Chapter 2A: Basic Chemistry Review</h2>
                <ul>
                    <li><strong>Matter:</strong> anything that takes up space and has mass</li>
                    <li><strong>Atom:</strong> smallest simplest unit of a substance that can't be broken down chemically or physically (+1 protons and 0 neutrons in nucleus, -1 electrons in orbitals surrounding)
                        <ul>
                            <li>If neutral, proton # = electron # (otherwise its an ion)</li>
                            <li>Protons and neutrons have 1amu mass, electrons have 1/1836amu mass (~0)</li>
                            <li>Valence electrons - electrons in valence outermost electron shell determining reactivity</li>
                            <li>Top left number is mass # (protons+neutrons), bottom left # is atomic number (# of protons which is the atom's identity)</li>
                            <li>Isotopes - atoms of same element w/ same proton number but different neutron number of mass number
                                <ul>
                                    <li>Radioisotopes - isotope w/ unstable nucleus that radioactively decay and emit radiation, used in fossil dating, radiolabeling to use as tracers, and radiotherapy for cancer (ex: C-14 for fossils/radiolabelling, Tc-99 for radiolabelling, I-131 and Co-60 for radiotherapy</li>
                                </ul>
                            </li>
                        </ul>
                    </li>
                    <li><strong>Element:</strong>substance composed of all same type of atom (periodic table elements). CHONP is most abundant elements, with all organic compounds having C</li>
                    <li><strong>Compound:</strong> substance w/ 2 or more different chemically bonded atoms</li>
                    <li><strong>Molecule:</strong> 2 or more nonmetal atoms chemically bonded</li>
                    <li>Some substances are both compounds and molecules (different nonmetals bonded), some are only molecules (diatomics), some are only compounds (ionic compounds)</li>
                    <li><strong>Mixture</strong>: 2 or more different substances combined physically not chemically
                        <ul>
                            <li>Molarity (M) shows how concentrated solutions are (higher molarity = more concentrated)</li>
                        </ul>
                    </li>
                    <li>Memorize: PO4^3- is phosphate, NH3 is ammonia</li>
                </ul>

                <h3>BONDING</h3>
                <ul>
                    <li>Atoms bond (gain/lose/share) to compete their valence shell and form octet of 8 valence electrons to get stable (H and He only need 2 valence electrons) <-- octet rule</li>
                    <li>Right side / nonmetals gain electrons, left side/metals lose electrons</li>
                    <li>Electronegatovity = atoms tendency to attract electrons, F is most electronegative (top right on periodic table is more electronegative, bottom left is least electronegative)</li>
                    <li>Losing electrons makes charge more positive, gaining electrons makes charge more negative</li>
                    <li>Greater electronegativity difference = more polar bond, ionic bond happens if >1.7</li>
                </ul>
                <div>
                    <div>
                        <p><strong>Ionic Bonding</strong></p>
                        <ul>
                            <li>Transfer of electrons usually between a metal and a nonmetal leading to attraction between 2 oppositely charged ions (greatest electronegativity difference than 1.7)</li>
                            <li>Ion - charged particle where proton number is not equal to electron number</li>
                            <li>Ex: NaCl -> Na+1 and Cl-1</li>
                        </ul>
                    </div>
                    <div>
                        <p><strong>Polar Covalent Bonding</strong></p>
                        <ul>   
                            <li>Unequal sharing of electrons usually between 2 different nonmetals where one pulls more</li>
                            <li>The atom with higher electronegativity pulls more strongly so has a partial nefative charge,the other atom has a partial positive charge</li>
                        </ul>
                    </div>
                    <div>
                        <p><strong>Nonpolar Covalent Bonding</strong></p>
                        <ul>
                            <li>Equal sharing of electrons between 2 same nonmetals (diatomics), so there is no EN difference</li>
                        </ul>
                    </div>
                </div>
                <h3>Molecule Polarity: SNAP</h3>
                <ul>
                    <li><em>Symmetrical molecules are nonpolar, asymmetrical molecules are polar</em></li>
                    <li>Shape and charge distribution of entire molecule affects molecule polarity</li>
                </ul>
                </p>
                
                <h2>Chapter 2B: More Basic Chemistry</h2>
                <ul>
                    <li>Intramolecular forces like ionic/covalent bonding are within a molecule/compound</li>
                    <li>Intermolecular forces are between molecules/compounds like hydrogen bonding, dipole-dipole attractions, van der waals forces, and London dispersion forces</li>
                </ul>
                <h3>HYDROGEN BONDING</h3>
                <ul>
                    <li>Strongest tpye of INTERmolecular force but weaker than intramolecular forces</li>
                    <li>Attraction between partially positive hydrogen atom of one molecule to a small, highly electronegative partially negative atom in another molecule (typically FON)
                    <li>Water, NH, and HF are capable of hydrogen bonding</li>
                    <li>Molecule is capable of hydrogen bonding if: it is polar/has polar bonding, has a partially positive hydrogen, and has at least one of the following partially negative atoms (FON)</li>
                </ul>

                <h3>PROPERTIES OF WATER:</h3>
                <p>Life depends on water</p>
                <p><strong>Structure:</strong> polar covalent bonding between O and H in molecule, polar molecule since asymmetrical, hydrogen bonding between molecules whiich causes unique properties</p>
                <div>
                    <div>
                        <p><strong>High specific heat of vaporization</strong></p>
                        <p>Water needs high amount of heat energy to raise 1g of it by 1 degree C since H bonds must be broken first. Allows organisms to maintain stable homeostasis internal body temperature</p>
                    </div>
                    <div>
                        <p><strong>High heat of vaporization</strong></p>
                        <p>Lots of energy needed to convert liquid water to gas, allowing for evaporative cooling like sweating and maintaining a stable body temperature</p>
                    </div>
                    <div>
                        <p><strong>Cohesion, Adhesion, Surface Tension</strong></p>
                        <p>COHESION - attraction between molecules of the same substance</p>
                        <p>ADHESION - attraction between molecules of different substances</p>
                        <p>Hydrogen bonding allows for water to cling to surfaces and each other</p>
                        <p>SURFACE TENSION - resist external force b/c molecules at surface stick tightly together and are pulled inwards by other molecules</p>
                        <p>Allows for capillary action (water transport up plant vessels b/c both), transpiration (evaporation off leaves b/c cohesion), blood flow through vessels (both), meniscus formation in graduated cylinder (adhesion), insects walk on water (surface tensions cohesion)</p>
                    </div>
                    <div>
                        <p><strong>Frozen water/ice is less dense than liquid water</strong></p>
                        <p>For most substances, solids are denser than liquids, but for water, solid ice has fewer water molecules per volume so its less dense b/c of more stable crystalline hydrogen bonds, compared to liquid water where hydogen bonds constantly break amd re-form. Allows aquatic life to survive under ice in winter (D=m/V)</p>
                    </div>
                    <div>
                        <p><strong>Water is a solvent</strong></p>
                        <p>Polar water dissolves other polar/ionic substances (hydrophilic) since like dissolves like: so polar/ionic dissolves or interacts w polar/ionic, nonpolar dissolves/interacts w nonpolar (hydrophobic). Allows polar substances to be carried through blood easily like electrolytes, glucose, vitamins/minerals while cholestrol doesn't dissolve well in blood so it won't accumulate. Ex: lipids/fats/oils and gas are hydrophobic, NaCl and ammonia are hydrophillic. Phospholipids are both hydrophobic and hydrophilic (ampipathic) since they have hydrophilic polar phosphate heads and hydrophobic nonpolar fatty acid lipid tails which makes membrane selectively permeable.</p>
                     </div>
                </div>

                <h3>ACIDS & BASES</h3>
                <ul>
                    <li><strong>Acids</strong>: yield/donate H+ in solution, pH less than 7</li>
                    <li><strong>Bases</strong>: yield/donate OH- or accept H+ in solution, pH greater than 7</li>
                    <li><strong>pH Scale</strong>: measures acidity/basicity of solution or concentration of H+, where 7=neutral, high=basic(lessH+), low=acidic(moreH+), and each unit is a 10-fold change in H+ concentration since pH=-log(H+)</li>
                    <li>Buffers - keep pH in normal (not necessarily neutral) limits by taking up excess H+ and OH- so drastic changes don't occur. Ex: Blood buffers like carbonic acid (weak acid) or bicarbonate (weak base) keeps blood pH at 7.4 since enzymes can denature if pH changes</li>
                </ul>

                <h2>Chapter 3: Biochemistry</h2>
                <h3>Organic Compounds</h3>
                <ul>
                    <li>Compounds containing carbon and hydrogen, basis of all living organisms</li>
                    <li>Carbohydrates, lipids, proteins, nucleic acids</li>
                    <li>Carbon useful since it's small, has 4 valence electrons, shares electrons to form 4 covalent bonds making stable molecules, forms single/double/triple bonds w itself creating chains or rings or bonds w other abundant elements (CHONPS)</li>
                    <li>Most basic category of organic compounds: hydrocarbons containing only C and H which are all nonpolar and hydrophobic</li>
                    <li><strong>Functional groups</strong>: enhance diversity of organic molecules giving function, polarity, properties, replacng one or more H atoms (ex: -OH hydroxyl group, -COOH carboxyl group, -NH2 amino group, phosphate group). Ex: testosterone vs estrogen are both steroid hormone lipids w different functional groups.</li>
                    <li><strong>Isomers</strong>: same molecular formula but different structures and properties. Ex: glucose (H on top, hexagon, cell energy broken down during cell respiration for ATP), fructose (pentagon fruit and food sweetener), galactose (OH on top, hexagon, sugar less sweet than glucose/fructose, can be combined w glucose to form lactose milk sugar, can be found outside cell membrane to play role in cell-cell recognition and identity markers) all have C6H12O6 formula</li>
                </ul>
                
                <h3>Reactions Making/Breaking Polymers</h3>
                <p>Monomers are individual repeating subunits in biomolecules, linked through covalent bonds to for a polymer which is a molecule made of many subunits together</p>
                <div>
                    <div>
                        <p><strong>Dehydration Synthesis</strong></p>
                        <p>Anabolic building process where monomers joined together by removing water (polymerization) in covalent bonds, requiring energy</p>
                    </div>
                    <div>
                        <p><strong>Hydrolysis</strong></p>
                        <p>Catabolic breakdown process where covalent bonds connecting monomers are broken by adding water, which releases energy overall</p>
                    </div>
                </div>

                <h3>Carbohydrates</h3>
                <ul>
                    <li>Quick energy, sugars, rice, bread, pasta</li>
                    <li>CHO in a 1:2:1 or close ratio</li>
                    <li>Generally polar & soluble in water b/c of many OH functional groups</li>
                    <li>Monomer: monosaccharide (simple single sugar) linked together through covalent bonds called glycosidic linkage</li>
                    <li><strong>Monosaccharides:</strong> provide immediate energy for cell processes, mostly in ring shape but sometimes linear. Ex: 6 carbon sugars like glucose, fructose, galactose (cell identity marker) which are isomers of C6H12O6, or 5 carbon sugars like deoxyribose (DNA) and ribose (RNA)</li>
                    <li><strong>Disaccharides:</strong> double sugars which are 2 monosacchardies joined by dehydration synthesis. Provide semi-immediate energy when broken to monosacchardies. Ex: glucose+glucose=maltose, glucose+fructose=sucrose(table sugar), glucose+galactose=lactose(milk sugar)</li>
                    <li><strong>Polysacchardies:</strong> complex carbohydrates for long term energy storage and structural support
                        <ul>
                            <li>Structural variations (shape and bonding) cause functional differences, like the ability to H-bond increases molecule strength while helical shapes expose sugar linkage to enzymes to breakdown easier</li>
                            <li>Long term energy storage, like starch which is the storage form of gluocse in plants (digestible to humans), and glycogen which is the storage form of glucose in animals typically in liver/muscles</li>
                            <li>Structural support, like cellulose which causes structural support/rigidity and tough plant cell walls (not digestible to humans), and chitin which is found in crustacean exoskeletons and fungi cell walls</li>
                        </ul>
                    </li>   
                </ul>

                <h3>Lipids</h3>
                <ul>
                    <li>CHO not in 1:2:1 ratio and sometimes P</li>
                    <li>nonpolar, fats, oils, butter</li>
                    <li>Generally insoluble/nonpolar bc of long hydrocarbon chains</li>
                    <li>No monomer subunit</li>
                    <li>Ester linkage covalent bonds link lipid components together for triglycerides and phospholipids only</li>
                    <li><strong>Triglycerides</strong>(fats/oils): CHO
                        <ul>
                            <li>Main function: long term energy storage and insulation. Made of 1 glycerol and 3 fatty acids linked together</li>
                            <div>
                                <div>
                                    <p>SATURATED FATTY ACIDS - single bonds between carbons, fully surrounded by hydrogens, solid fats at room temperature, linked to cardiovascular sicknesses since it builds up in blood vessels (ex: animal fats, butter)</p>
                                    <p>UNSATURATED FATTY ACIDS - at least one double bond creating kink/bends between carbons, generally liquid at room temp (ex: plant oils like corn oil)</p>    
                                </div>
                            </div>
                        </ul>
                    </li>
                    <li><strong>Phospholipids</strong>: CHOP
                        <ul>
                            <li>Main function: plasma membrane components</li>
                            <li>Structure: phosphate group PO4^3 & glycerol making up the polar hydrophillic head, 2 fatty acids nonppolar hydrophobic tails</li>

                        </ul>
                    </li>
                
                    
                    
                </ul>
                `

            }
        }
    }
}